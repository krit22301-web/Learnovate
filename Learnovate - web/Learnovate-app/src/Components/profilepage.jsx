import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    User, Mail, Phone, MapPin, School, BookOpen, Star, Calendar,
    Edit3, Save, X, Award, Target, ShoppingCart, Clock, CheckCircle
} from 'lucide-react';

const API_BASE_URL = 'https://backend-test-k5py.onrender.com';

function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [userProfile, setUserProfile] = useState({
        username: '',
        fullName: '',
        email: '',
        phone: '',
        address: '',
        school: '',
        bio: '',
        skills: [],
        interests: [],
        joinDate: '',
        completedCourses: 0,
        totalHours: 0,
        purchasedCourses: []
    });
    const [isLoadingProfile, setIsLoadingProfile] = useState(true);
    const [saveMessage, setSaveMessage] = useState('');
    const [error, setError] = useState('');
    const [editForm, setEditForm] = useState({ ...userProfile });

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            setIsLoadingProfile(true);
            setError('');

            const response = await fetch(`${API_BASE_URL}/user/profile`, {
                method: 'GET',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                const data = await response.json();
                setUserProfile(data.profile);
                setEditForm(data.profile);
            } else if (response.status === 401) {
                setError('Please log in to view your profile');
                window.location.href = '/login';
            } else if (response.status !== 404) {
                const errorData = await response.json();
                setError(errorData.error || 'Failed to fetch profile');
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            setError('Network error. Please check your connection.');
        } finally {
            setIsLoadingProfile(false);
        }
    };

    const handleSave = async () => {
        try {
            setSaveMessage('Saving...');
            setError('');

            const response = await fetch(`${API_BASE_URL}/user/profile`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: editForm.fullName || '',
                    phone: editForm.phone || '',
                    address: editForm.address || '',
                    school: editForm.school || '',
                    bio: editForm.bio || '',
                    skills: Array.isArray(editForm.skills) ? editForm.skills : [],
                    interests: Array.isArray(editForm.interests) ? editForm.interests : []
                })
            });

            if (response.ok) {
                const data = await response.json();
                setUserProfile(data.profile);
                setEditForm(data.profile);
                setIsEditing(false);
                setSaveMessage('Profile saved successfully!');
                setTimeout(() => setSaveMessage(''), 3000);
            } else if (response.status === 401) {
                setError('Please log in to save your profile');
                window.location.href = '/login';
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Failed to save profile');
                setSaveMessage('');
            }
        } catch (error) {
            console.error('Error saving profile:', error);
            setError('Network error. Please try again.');
            setSaveMessage('');
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        setEditForm({ ...userProfile });
    };

    const handleCancel = () => {
        setEditForm({ ...userProfile });
        setIsEditing(false);
        setError('');
    };

    const handleInputChange = (field, value) => {
        setEditForm({ ...editForm, [field]: value });
    };

    const handleArrayChange = (field, value) => {
        const array = value.split(',').map(item => item.trim()).filter(item => item);
        setEditForm({ ...editForm, [field]: array });
    };

    const getProgressColor = (progress) => {
        if (progress >= 80) return 'bg-green-500';
        if (progress >= 50) return 'bg-yellow-500';
        return 'bg-blue-500';
    };

    const getStatusBadge = (status) => {
        if (status === 'completed') {
            return (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle size={12} className="mr-1" />
                    Completed
                </span>
            );
        }
        return (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <Clock size={12} className="mr-1" />
                In Progress
            </span>
        );
    };

    const activeCourses = userProfile.purchasedCourses?.filter(c => c.status === 'in-progress').length || 0;

    if (isLoadingProfile) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        {error}
                    </div>
                )}

                {/* Profile Header */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <User size={40} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {userProfile.fullName || userProfile.username || 'Welcome!'}
                                </h1>
                                <p className="text-gray-600">@{userProfile.username || 'user'}</p>
                                {userProfile.joinDate ? (
                                    <p className="text-sm text-gray-500 flex items-center mt-1">
                                        <Calendar size={14} className="mr-1" />
                                        Member since {new Date(userProfile.joinDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long'
                                        })}
                                    </p>
                                ) : (
                                    <p className="text-sm text-blue-600 mt-1">Complete your profile to get started!</p>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={isEditing ? handleCancel : handleEdit}
                            className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                            {isEditing ? (
                                <>
                                    <X size={16} className="mr-2" />
                                    Cancel
                                </>
                            ) : (
                                <>
                                    <Edit3 size={16} className="mr-2" />
                                    Edit Profile
                                </>
                            )}
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <BookOpen className="text-blue-600" size={24} />
                                <div>
                                    <p className="text-sm text-gray-600">Completed Courses</p>
                                    <p className="text-2xl font-bold text-blue-600">{userProfile.completedCourses || 0}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <Clock className="text-green-600" size={24} />
                                <div>
                                    <p className="text-sm text-gray-600">Learning Hours</p>
                                    <p className="text-2xl font-bold text-green-600">{userProfile.totalHours || 0}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <Award className="text-purple-600" size={24} />
                                <div>
                                    <p className="text-sm text-gray-600">Active Courses</p>
                                    <p className="text-2xl font-bold text-purple-600">{activeCourses}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Personal Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                            <h2 className="text-xl font-bold mb-4">Personal Information</h2>

                            <div className="space-y-4">
                                {[
                                    { icon: User, label: 'Full Name', field: 'fullName', type: 'input', editable: true },
                                    { icon: Mail, label: 'Email', field: 'email', type: 'display', editable: false },
                                    { icon: Phone, label: 'Phone', field: 'phone', type: 'input', inputType: 'tel', editable: true },
                                    { icon: MapPin, label: 'Address', field: 'address', type: 'textarea', editable: true },
                                    { icon: School, label: 'School', field: 'school', type: 'input', editable: true }
                                ].map(({ icon: Icon, label, field, type, inputType = 'text', editable }) => (
                                    <div key={field} className="flex items-start space-x-3">
                                        <Icon size={18} className="text-gray-500 mt-1" />
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-600">{label}</p>
                                            {isEditing && editable ? (
                                                type === 'textarea' ? (
                                                    <textarea
                                                        value={editForm[field] || ''}
                                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                                        className="w-full p-2 border rounded-lg h-20 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder={`Enter your ${label.toLowerCase()}`}
                                                    />
                                                ) : (
                                                    <input
                                                        type={inputType}
                                                        value={editForm[field] || ''}
                                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder={`Enter your ${label.toLowerCase()}`}
                                                    />
                                                )
                                            ) : (
                                                <>
                                                    <p className="font-medium">{userProfile[field] || 'Not provided'}</p>
                                                    {field === 'email' && (
                                                        <p className="text-xs text-gray-400">Email cannot be changed from profile</p>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {saveMessage && (
                                <div className={`mt-4 p-3 rounded-lg text-center ${
                                    saveMessage.includes('successfully') ? 'bg-green-100 text-green-800' :
                                    saveMessage.includes('Saving') ? 'bg-blue-100 text-blue-800' :
                                    'bg-red-100 text-red-800'
                                }`}>
                                    {saveMessage}
                                </div>
                            )}

                            {isEditing && (
                                <button
                                    onClick={handleSave}
                                    className="w-full mt-6 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
                                    disabled={saveMessage === 'Saving...'}
                                >
                                    <Save size={16} className="mr-2" />
                                    {saveMessage === 'Saving...' ? 'Saving...' : 'Save Changes'}
                                </button>
                            )}
                        </div>

                        {/* Skills & Interests */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Skills & Interests</h2>

                            {[
                                { icon: Target, label: 'Skills', field: 'skills', color: 'blue' },
                                { icon: Star, label: 'Interests', field: 'interests', color: 'green' }
                            ].map(({ icon: Icon, label, field, color }) => (
                                <div key={field} className={field === 'skills' ? 'mb-6' : ''}>
                                    <div className="flex items-center space-x-2 mb-3">
                                        <Icon size={18} className={`text-${color}-600`} />
                                        <h3 className="font-semibold text-gray-800">{label}</h3>
                                    </div>
                                    {isEditing ? (
                                        <textarea
                                            placeholder={`Enter ${label.toLowerCase()} separated by commas`}
                                            value={Array.isArray(editForm[field]) ? editForm[field].join(', ') : ''}
                                            onChange={(e) => handleArrayChange(field, e.target.value)}
                                            className="w-full p-2 border rounded-lg h-20 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    ) : (
                                        <div className="flex flex-wrap gap-2">
                                            {userProfile[field]?.length > 0 ? (
                                                userProfile[field].map((item, index) => (
                                                    <span
                                                        key={index}
                                                        className={`px-3 py-1 bg-${color}-100 text-${color}-800 rounded-full text-sm font-medium`}
                                                    >
                                                        {item}
                                                    </span>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 italic">No {label.toLowerCase()} added yet</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Purchased Courses */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center space-x-2 mb-6">
                                <ShoppingCart size={20} className="text-purple-600" />
                                <h2 className="text-xl font-bold">Purchased Courses</h2>
                            </div>

                            <div className="space-y-4">
                                {userProfile.purchasedCourses?.length > 0 ? (
                                    userProfile.purchasedCourses.map((course, index) => (
                                        <div key={course.id || index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-lg text-gray-900">{course.title}</h3>
                                                    <p className="text-gray-600">Instructor: {course.instructor}</p>
                                                    <p className="text-sm text-gray-500">
                                                        Purchased: {new Date(course.purchaseDate).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    {getStatusBadge(course.status)}
                                                    <p className="text-lg font-bold text-gray-900 mt-1">{course.price}</p>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span>Progress</span>
                                                    <span>{course.progress}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                                                        style={{ width: `${course.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {course.rating && (
                                                <div className="flex items-center">
                                                    <Star size={16} className="text-yellow-500 fill-current" />
                                                    <span className="ml-1 text-sm font-medium">{course.rating}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8">
                                        <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                                        <p className="text-gray-500 text-lg">No courses purchased yet</p>
                                        <p className="text-gray-400">Browse our courses to start learning!</p>
                                        <Link
                                            to="/courses"
                                            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Browse Courses
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;