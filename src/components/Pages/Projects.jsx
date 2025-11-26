import React from 'react';

const Projects = () => {
    return (
        <div className="w-full max-w-4xl mx-auto text-white p-8 animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl font-serif tracking-wider mb-6">
                Projects
            </h1>
            <p className="text-xl text-gray-400 font-light mb-8">
                Under Construction
            </p>
            <div className="grid gap-6">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-all group">
                    <h3 className="text-2xl font-serif text-accent mb-2">College Football Tracker</h3>
                    <p className="text-sm text-gray-400 mb-4 font-mono">Progressive Web App (PWA)</p>
                    <p className="text-gray-300 mb-6 font-light">
                        Real-time scores, schedules, and stats for your favorite teams. Installable on mobile.
                    </p>
                    <a
                        href="https://college-football-tracker-chi.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-black bg-accent px-6 py-3 rounded hover:bg-white transition-colors"
                    >
                        Launch App <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
