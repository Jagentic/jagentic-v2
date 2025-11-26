
import React from 'react';

const Projects = () => {
    return (
        <div className="w-full max-w-6xl mx-auto text-white p-8 animate-fade-in">
            <div className="mb-12 text-center">
                <h1 className="text-5xl md:text-6xl font-serif tracking-wider mb-4">
                    Projects
                </h1>
                <p className="text-xl text-gray-400 font-light tracking-wide">
                    Applications & Generated Content
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1: College Football Tracker */}
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all group flex flex-col">
                    <div className="p-8 flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-3xl font-serif text-accent">CFB Tracker</h3>
                            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
                                PWA
                            </span>
                        </div>
                        <p className="text-gray-300 font-light leading-relaxed mb-6">
                            A Progressive Web App delivering real-time scores, schedules, and stats. Built for speed and installable on any device.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['React', 'Vite', 'API Integration', 'Mobile-First'].map(tag => (
                                <span key={tag} className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                        <a
                            href="https://college-football-tracker-chi.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 bg-accent text-black font-bold tracking-widest uppercase rounded hover:bg-white transition-colors"
                        >
                            Launch App
                        </a>
                    </div>
                </div>

                {/* Project 2: Geography Quiz */}
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all group flex flex-col">
                    <div className="p-8 pb-4">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-3xl font-serif text-white group-hover:text-accent transition-colors">
                                Geo Quiz
                            </h3>
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-mono rounded-full border border-purple-500/20">
                                REMOTION
                            </span>
                        </div>
                        <p className="text-gray-300 font-light leading-relaxed mb-6">
                            Programmatically generated video content. This entire quiz video was rendered using React code, not video editing software.
                        </p>
                    </div>

                    {/* Video Player */}
                    <div className="relative aspect-video bg-black/50 border-t border-white/10">
                        <video
                            controls
                            className="w-full h-full object-cover"
                            poster="/assets/video-poster-placeholder.jpg" // Optional: Add a poster if available later
                        >
                            <source src="/WorldLandmarksQuiz.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Project 3: WLBS.org */}
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all group flex flex-col md:col-span-2 lg:col-span-1">
                    <div className="p-8 flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-3xl font-serif text-white group-hover:text-accent transition-colors">
                                WLBS.org
                            </h3>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono rounded-full border border-blue-500/20">
                                WEBSITE
                            </span>
                        </div>
                        <p className="text-gray-300 font-light leading-relaxed mb-6">
                            A vibrant, responsive website built for a client. Features a modern design with rich imagery and a focus on user engagement.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Web Design', 'Client Work', 'Vibrant UI'].map(tag => (
                                <span key={tag} className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                        <a
                            href="https://wlbs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 bg-white/10 text-white font-bold tracking-widest uppercase rounded hover:bg-white hover:text-black transition-colors"
                        >
                            Visit Site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
