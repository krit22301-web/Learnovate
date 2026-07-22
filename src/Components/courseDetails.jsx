import React, { useState, useEffect } from 'react';
import { Star, Play, Lock, CheckCircle, Trophy } from 'lucide-react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { courses } from '../data/coursedata';

const YT_API_KEY = import.meta.env.VITE_YT_API_KEY;
const YT_API_BASE = 'https://www.googleapis.com/youtube/v3';

// Converts ISO 8601 duration (e.g. "PT1H2M10S") -> "1:02:10" or "52:14"
function formatDuration(isoDuration) {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  const hours = parseInt(match?.[1] || 0, 10);
  const minutes = parseInt(match?.[2] || 0, 10);
  const seconds = parseInt(match?.[3] || 0, 10);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

// Fetches every video in a YouTube playlist (paginated) plus each video's duration,
// and returns them already shaped like this app's `modules` objects.
async function fetchPlaylistModules(playlistId) {
  let items = [];
  let nextPageToken = '';

  do {
    const url = `${YT_API_BASE}/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&pageToken=${nextPageToken}&key=${YT_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || 'Failed to fetch playlist');
    }

    const batch = data.items
      // skip private/deleted videos, which YouTube reports with these placeholder titles
      .filter((item) => item.snippet.title !== 'Private video' && item.snippet.title !== 'Deleted video')
      .map((item) => ({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url
      }));

    items = [...items, ...batch];
    nextPageToken = data.nextPageToken || '';
  } while (nextPageToken);

  // Fetch durations in batches of 50 (videos.list allows comma-separated IDs)
  const durations = {};
  for (let i = 0; i < items.length; i += 50) {
    const batchIds = items.slice(i, i + 50).map((v) => v.videoId).join(',');
    const durUrl = `${YT_API_BASE}/videos?part=contentDetails&id=${batchIds}&key=${YT_API_KEY}`;
    const durRes = await fetch(durUrl);
    const durData = await durRes.json();

    if (durData.error) {
      throw new Error(durData.error.message || 'Failed to fetch video durations');
    }

    durData.items.forEach((item) => {
      durations[item.id] = formatDuration(item.contentDetails.duration);
    });
  }

  return items.map((v, index) => ({
    id: index + 1,
    title: v.title,
    duration: durations[v.videoId] || 'N/A',
    videoUrl: `https://www.youtube.com/watch?v=${v.videoId}`,
    thumbnail: v.thumbnail,
    free: index === 0 // first video free, rest locked until enrolled — adjust as needed
  }));
}

function CourseDetails() {
  const { id: courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [modulesLoading, setModulesLoading] = useState(false);
  const [modulesError, setModulesError] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollmentMessage, setEnrollmentMessage] = useState('');
  const [watchProgress, setWatchProgress] = useState({});
  const [currentProgress, setCurrentProgress] = useState(0);
  const [completedModules, setCompletedModules] = useState(0);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === parseInt(courseId));
    if (!foundCourse) return;

    setCourse(foundCourse);

    if (foundCourse.playlistId) {
      // Dynamic course: fetch modules from the YouTube playlist
      setModulesLoading(true);
      setModulesError('');
      fetchPlaylistModules(foundCourse.playlistId)
        .then((fetchedModules) => {
          setModules(fetchedModules);
          if (fetchedModules.length > 0) {
            setCurrentVideo(fetchedModules[0]);
          }
          checkEnrollmentStatus(foundCourse.id, fetchedModules);
        })
        .catch((err) => {
          console.error('Error fetching playlist modules:', err);
          setModulesError('Could not load videos for this course right now.');
        })
        .finally(() => setModulesLoading(false));
    } else {
      // Static course: modules already live in coursedata.js
      const staticModules = foundCourse.modules || [];
      setModules(staticModules);
      if (staticModules.length > 0) {
        setCurrentVideo(staticModules[0]);
      }
      checkEnrollmentStatus(foundCourse.id, staticModules);
    }
  }, [courseId]);

  const checkEnrollmentStatus = async (courseId, moduleList) => {
    try {
      const response = await fetch(`https://backend-test-k5py.onrender.com/user/course-status/${courseId}`, {
        method: 'GET',
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setIsEnrolled(data.enrolled);
        setCurrentProgress(data.progress || 0);
        setCompletedModules(data.completedModules || 0);
        const progress = {};
        moduleList.forEach((module, index) => {
          progress[module.id] = index < data.completedModules;
        });
        setWatchProgress(progress);
      }
    } catch (error) {
      console.error('Error checking enrollment:', error);
    }
  };

  const handleEnrollment = async () => {
    if (!course) return;
    setIsEnrolling(true);
    setEnrollmentMessage('');
    try {
      const response = await fetch('https://backend-test-k5py.onrender.com/user/enroll-course', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: course.id.toString(),
          title: course.title,
          instructor: course.instructor,
          rating: course.rating,
          totalModules: modules.length
        })
      });
      if (response.ok) {
        setIsEnrolled(true);
        setEnrollmentMessage('Successfully enrolled!');
        setTimeout(() => setEnrollmentMessage(''), 2000);
      } else {
        setEnrollmentMessage('Please log in to enroll');
        setTimeout(() => window.location.href = '/login', 2000);
      }
    } catch (error) {
      setEnrollmentMessage('Network error');
    } finally {
      setIsEnrolling(false);
      setTimeout(() => setEnrollmentMessage(''), 3000);
    }
  };

  const handleVideoProgress = async (moduleId, progress) => {
    if (!isEnrolled || !course) return;
    const isCompleted = progress > 0.9;
    setWatchProgress(prev => {
      const newProgress = { ...prev, [moduleId]: isCompleted };
      const completedCount = Object.values(newProgress).filter(Boolean).length;
      setCompletedModules(completedCount);

      const newProgressPercentage = Math.round((completedCount / modules.length) * 100);

      if (newProgressPercentage >= currentProgress) {
        setCurrentProgress(newProgressPercentage);
        updateProgressInDatabase(course.id.toString(), newProgressPercentage, completedCount);
      }

      return newProgress;
    });
  };

  const updateProgressInDatabase = async (courseId, progressPercentage, completedCount) => {
    try {
      await fetch('https://backend-test-k5py.onrender.com/user/update-progress', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId,
          progress: progressPercentage,
          completedModules: completedCount
        })
      });
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const handleVideoSelect = (module) => {
    if (module.free || isEnrolled) {
      setCurrentVideo(module);
    } else {
      setEnrollmentMessage("Enroll to access this module!");
      setTimeout(() => setEnrollmentMessage(''), 3000);
    }
  };

  if (!course) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-600">Course not found!</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
          </div>
          <div className={`px-4 py-2 rounded-full font-semibold ${isEnrolled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
            }`}>
            {isEnrolled ? 'Enrolled' : 'Not Enrolled'}
          </div>
        </div>

        <div className="flex items-center text-gray-500 space-x-6 mb-4">
          <span className="flex items-center">
            <Star size={16} className="mr-1 text-yellow-500 fill-current" />
            {course.rating}
          </span>
          <span>Level: {course.difficulty}</span>
          <span>Lectures: {course.lectures}</span>
        </div>

        {isEnrolled && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle size={20} className="text-green-600" />
              <span className="text-green-600 font-medium">Enrolled!</span>
              {currentProgress == 100 && <Trophy size={20} className="text-yellow-600 ml-2" />}
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Progress: <span className="font-semibold text-green-600">{currentProgress}%</span></div>
              <div>Completed: <span className="font-semibold text-green-600">{completedModules}/{modules.length}</span></div>
              <div>Status: <span className={`font-semibold ${currentProgress >= 100 ? 'text-yellow-600' : 'text-blue-600'}`}>
                {currentProgress >= 100 ? 'Completed!' : 'In Progress'}
              </span></div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full transition-all duration-300 ${currentProgress >= 100 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${currentProgress}%` }}></div>
              </div>
            </div>
          </div>
        )}

        {enrollmentMessage && (
          <div className={`p-3 rounded-lg mb-4 text-center font-medium ${enrollmentMessage.includes('Successfully') ? 'bg-green-100 text-green-800' :
            enrollmentMessage.includes('log in') ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
            {enrollmentMessage}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {modulesLoading ? (
            <div className="bg-black rounded-xl overflow-hidden shadow-lg mb-4 h-[400px] flex items-center justify-center">
              <div className="text-white flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-3"></div>
                <span>Loading videos...</span>
              </div>
            </div>
          ) : modulesError ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4 text-center text-red-700">
              {modulesError}
            </div>
          ) : currentVideo ? (
            <>
              <div className="bg-black rounded-xl overflow-hidden shadow-lg mb-4">
                <ReactPlayer
                  url={currentVideo.videoUrl}
                  width="100%"
                  height="400px"
                  controls
                  onProgress={({ played }) => handleVideoProgress(currentVideo.id, played)}
                />
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{currentVideo.title}</h3>
                    <p className="text-gray-600">Duration: {currentVideo.duration}</p>
                  </div>
                  {watchProgress[currentVideo.id] && <CheckCircle size={24} className="text-green-500" />}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl p-6 mb-4 text-center text-gray-500">
              No videos available for this course yet.
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Course Content</h3>
            <div className="space-y-2 mb-6 max-h-[500px] overflow-y-auto">
              {modulesLoading && (
                <p className="text-sm text-gray-500">Loading course content...</p>
              )}
              {!modulesLoading && modules.map((module, index) => (
                <div key={module.id} className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors ${currentVideo?.id === module.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                  }`} onClick={() => handleVideoSelect(module)}>
                  <div className="flex items-center flex-1">
                    {module.free || isEnrolled ? (
                      watchProgress[module.id] ?
                        <CheckCircle size={16} className="mr-2 text-green-600" /> :
                        <Play size={16} className="mr-2 text-blue-600" />
                    ) : (
                      <Lock size={16} className="mr-2 text-gray-400" />
                    )}
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${module.free || isEnrolled ? 'text-gray-900' : 'text-gray-500'}`}>
                        {index + 1}. {module.title}
                      </p>
                      <p className="text-xs text-gray-500">{module.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {!isEnrolled ? (
              <button onClick={handleEnrollment} disabled={isEnrolling}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${course.free ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}>
                {isEnrolling ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Enrolling...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    <span>Enroll</span>
                  </>
                )}
              </button>
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <CheckCircle size={32} className="text-green-600 mx-auto mb-2" />
                <p className="font-medium text-green-800 mb-2">Enrolled!</p>
                <p className="text-sm text-gray-600 mb-3">Continue learning</p>
                {currentProgress >= 100 && (
                  <div className="bg-yellow-100 border border-yellow-300 rounded p-2">
                    <Trophy size={20} className="text-yellow-600 mx-auto mb-1" />
                    <p className="text-sm font-bold text-yellow-800">Congratulations!</p>
                    <p className="text-xs text-yellow-700">Course completed!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;