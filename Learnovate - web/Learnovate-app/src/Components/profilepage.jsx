import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        if (progress >= 80) return 'bg-gradient-to-r from-green-400 to-emerald-500';
        if (progress >= 50) return 'bg-gradient-to-r from-yellow-400 to-orange-500';
        return 'bg-gradient-to-r from-cyan-400 to-blue-500';
    };

    const getStatusBadge = (status) => {
        if (status === 'completed') {
            return (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    <CheckCircle size={12} className="mr-1" />
                    Completed
                </span>
            );
        }
        return (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                <Clock size={12} className="mr-1" />
                In Progress
            </span>
        );
    };

    const activeCourses = userProfile.purchasedCourses?.filter(c => c.status === 'in-progress').length || 0;

    if (isLoadingProfile) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-4 border-cyan-500 border-t-transparent mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300">Loading your profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-300 px-6 py-4 rounded-xl mb-6 backdrop-blur-sm"
                    >
                        {error}
                    </motion.div>
                )}

                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 p-8 mb-8"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                        <div className="flex items-center space-x-6 mb-4 md:mb-0">
                            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <User size={48} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {userProfile.fullName || userProfile.username || 'Welcome!'}
                                </h1>
                                <p className="text-gray-400 text-lg">@{userProfile.username || 'user'}</p>
                                {userProfile.joinDate ? (
                                    <p className="text-sm text-gray-500 flex items-center mt-2">
                                        <Calendar size={16} className="mr-2 text-cyan-400" />
                                        Member since {new Date(userProfile.joinDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long'
                                        })}
                                    </p>
                                ) : (
                                    <p className="text-sm text-cyan-400 mt-2">Complete your profile to get started!</p>
                                )}
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={isEditing ? handleCancel : handleEdit}
                            className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-cyan-500/50"
                        >
                            {isEditing ? (
                                <>
                                    <X size={18} className="mr-2" />
                                    Cancel
                                </>
                            ) : (
                                <>
                                    <Edit3 size={18} className="mr-2" />
                                    Edit Profile
                                </>
                            )}
                        </motion.button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: BookOpen, label: 'Completed Courses', value: userProfile.completedCourses || 0, color: 'from-blue-500 to-cyan-500' },
                            { icon: Clock, label: 'Learning Hours', value: userProfile.totalHours || 0, color: 'from-green-500 to-emerald-500' },
                            { icon: Award, label: 'Active Courses', value: activeCourses, color: 'from-purple-500 to-pink-500' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                                        <stat.icon className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">{stat.label}</p>
                                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Personal Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 p-6"
                        >
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Personal Information</h2>

                            <div className="space-y-6">
                                {[
                                    { icon: User, label: 'Full Name', field: 'fullName', type: 'input', editable: true },
                                    { icon: Mail, label: 'Email', field: 'email', type: 'display', editable: false },
                                    { icon: Phone, label: 'Phone', field: 'phone', type: 'input', inputType: 'tel', editable: true },
                                    { icon: MapPin, label: 'Address', field: 'address', type: 'textarea', editable: true },
                                    { icon: School, label: 'School', field: 'school', type: 'input', editable: true }
                                ].map(({ icon: Icon, label, field, type, inputType = 'text', editable }) => (
                                    <div key={field} className="flex items-start space-x-4">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                                            <Icon size={20} className="text-cyan-400" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-400 mb-2">{label}</p>
                                            {isEditing && editable ? (
                                                type === 'textarea' ? (
                                                    <textarea
                                                        value={editForm[field] || ''}
                                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                                        className="w-full p-3 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 h-20 resize-none"
                                                        placeholder={`Enter your ${label.toLowerCase()}`}
                                                    />
                                                ) : (
                                                    <input
                                                        type={inputType}
                                                        value={editForm[field] || ''}
                                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                                        className="w-full p-3 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                                                        placeholder={`Enter your ${label.toLowerCase()}`}
                                                    />
                                                )
                                            ) : (
                                                <>
                                                    <p className="font-medium text-white">{userProfile[field] || 'Not provided'}</p>
                                                    {field === 'email' && (
                                                        <p className="text-xs text-gray-500 mt-1">Email cannot be changed from profile</p>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {saveMessage && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={`mt-6 p-4 rounded-xl text-center font-medium ${saveMessage.includes('successfully')
                                            ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30' :
                                            saveMessage.includes('Saving')
                                                ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30' :
                                                'bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/30'
                                        }`}
                                >
                                    {saveMessage}
                                </motion.div>
                            )}

                            {isEditing && (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleSave}
                                    className="w-full mt-6 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-xl transition-all duration-300 disabled:opacity-50 font-medium"
                                    disabled={saveMessage === 'Saving...'}
                                >
                                    <Save size={18} className="mr-2" />
                                    {saveMessage === 'Saving...' ? 'Saving...' : 'Save Changes'}
                                </motion.button>
                            )}
                        </motion.div>

                        {/* Skills & Interests */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 p-6"
                        >
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills & Interests</h2>

                            {[
                                { icon: Target, label: 'Skills', field: 'skills', color: 'from-blue-500 to-cyan-500' },
                                { icon: Star, label: 'Interests', field: 'interests', color: 'from-green-500 to-emerald-500' }
                            ].map(({ icon: Icon, label, field, color }) => (
                                <div key={field} className={field === 'skills' ? 'mb-8' : ''}>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`p-2 rounded-lg bg-gradient-to-r ${color}/20`}>
                                            <Icon size={20} className="text-white" />
                                        </div>
                                        <h3 className="font-bold text-white text-lg">{label}</h3>
                                    </div>
                                    {isEditing ? (
                                        <textarea
                                            placeholder={`Enter ${label.toLowerCase()} separated by commas`}
                                            value={Array.isArray(editForm[field]) ? editForm[field].join(', ') : ''}
                                            onChange={(e) => handleArrayChange(field, e.target.value)}
                                            className="w-full p-3 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 h-20 resize-none"
                                        />
                                    ) : (
                                        <div className="flex flex-wrap gap-3">
                                            {userProfile[field]?.length > 0 ? (
                                                userProfile[field].map((item, index) => (
                                                    <span
                                                        key={index}
                                                        className={`px-4 py-2 bg-gradient-to-r ${color} text-white rounded-full text-sm font-medium shadow-lg`}
                                                    >
                                                        {item}
                                                    </span>
                                                ))
                                            ) : (
                                                <p className="text-gray-400 italic">No {label.toLowerCase()} added yet</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Purchased Courses */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 p-6"
                        >
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                                    <ShoppingCart size={24} className="text-purple-400" />
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Purchased Courses</h2>
                            </div>

                            <div className="space-y-6">
                                {userProfile.purchasedCourses?.length > 0 ? (
                                    userProfile.purchasedCourses.map((course, index) => (
                                        <motion.div
                                            key={course.id || index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                                        {course.title}
                                                    </h3>
                                                    <p className="text-gray-300">Instructor: {course.instructor}</p>
                                                    <p className="text-sm text-gray-400">
                                                        Purchased: {new Date(course.purchaseDate).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    {getStatusBadge(course.status)}
                                                    <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mt-2">
                                                        {course.price}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="flex justify-between text-sm mb-2 text-gray-300">
                                                    <span>Progress</span>
                                                    <span>{course.progress}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                                    <div
                                                        className={`h-3 rounded-full ${getProgressColor(course.progress)} transition-all duration-500`}
                                                        style={{ width: `${course.progress}%` }}
                                                    />
                                                </div>
                                            </div>

                                            {course.rating && (
                                                <div className="flex items-center">
                                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                                    <span className="ml-2 text-sm font-medium text-gray-300">
                                                        {course.rating}
                                                    </span>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="w-24 h-24 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <BookOpen size={48} className="text-gray-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-300 mb-2">No courses purchased yet</h3>
                                        <p className="text-gray-400 mb-6">Browse our courses to start learning!</p>
                                        <div className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium">
                                            Check out available courses
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;