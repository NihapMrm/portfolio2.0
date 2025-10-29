import React, { useState, useEffect } from 'react';
import { FiMaximize, FiX } from "react-icons/fi";

const FullscreenNotification = () => {
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        // Check if user has seen this notification before
        const hasSeenNotification = localStorage.getItem('hasSeenFullscreenNotification');
        
        if (!hasSeenNotification && !document.fullscreenElement) {
            // Show notification after a short delay
            const timer = setTimeout(() => {
                setShowNotification(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setShowNotification(false);
        localStorage.setItem('hasSeenFullscreenNotification', 'true');
    };

    const handleToggleFullscreen = async () => {
        try {
            await document.documentElement.requestFullscreen();
            handleDismiss();
        } catch (error) {
            console.error('Error entering fullscreen:', error);
        }
    };

    if (!showNotification) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-md mx-4 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-full">
                            <FiMaximize className="text-blue-400" size={20} />
                        </div>
                        <h3 className="text-white font-semibold text-lg">Better Experience</h3>
                    </div>
                    <button 
                        onClick={handleDismiss}
                        className="text-white/60 hover:text-white/80 transition-colors"
                    >
                        <FiX size={20} />
                    </button>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                    For the best portfolio viewing experience, we recommend switching to fullscreen mode. 
                    You can toggle it anytime using the button in the bottom-right corner.
                </p>
                
                <div className="flex gap-3">
                    <button 
                        onClick={handleToggleFullscreen}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                        Go Fullscreen
                    </button>
                    <button 
                        onClick={handleDismiss}
                        className="px-4 py-2 text-white/70 hover:text-white/90 transition-colors"
                    >
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullscreenNotification;