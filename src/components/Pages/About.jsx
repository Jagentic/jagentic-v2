import React from 'react';

const About = () => {
    return (
        <div className="w-full max-w-4xl mx-auto text-white p-8 animate-fade-in">
            {/* Header Section */}
            <div className="mb-12 border-l-4 border-accent pl-6">
                <h1 className="text-5xl md:text-6xl font-serif tracking-wider mb-4">
                    AI Layer Slayer
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-400 font-mono tracking-widest uppercase">
                    Jagentic Team &middot; Elite Ambassadors
                </h2>
            </div>

            {/* Philosophy Section */}
            <div className="mb-16 bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h3 className="text-3xl font-serif text-accent mb-6 flex items-center gap-3">
                    Opportunities <span className="text-white">⊆</span> Aggravations
                </h3>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                    <p>
                        When something frustrates me, I conceptualize a solution, encapsulate it into an actionable plan, and build it—now bolstered by AI superpowers. I’m neck-deep in agent orchestration toward that end and seeing impressive, reassuring results.
                    </p>
                    <p>
                        My passion and earnestness beget effective persuasiveness. Being empathic, I enjoy sharing good news and delivering real improvements. As I level up and deploy, I expect to find success on my own—but I also see myself as an elite ambassador and liaison, identifying and presenting well-packaged solutions to prospects large and small.
                    </p>
                    <p className="font-medium text-white">
                        When I am both competent and confident in a solution, I am credible. And when I am credible, I will not tire of sharing and insisting on its consideration.
                    </p>
                </div>
            </div>

            {/* Credentials Section */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-4 text-gray-500">
                        Credentials
                    </h4>
                    <div className="bg-black/40 p-6 rounded border border-accent/20 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-accent font-mono text-sm">PGP-AIML</span>
                            <span className="text-gray-500 text-xs">UT Austin McCombs</span>
                        </div>
                        <h5 className="text-xl font-serif mb-2 text-white">
                            Artificial Intelligence & Machine Learning
                        </h5>
                        <p className="text-sm text-gray-400 mb-4">
                            Postgraduate Program &middot; Business Applications
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            A comprehensive 7-month curriculum covering Python, Machine Learning, Neural Networks, and Computer Vision, focusing on practical business solutions.
                        </p>
                    </div>
                </div>

                {/* Skills / Stack (Optional Placeholder) */}
                <div className="flex-1">
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-4 text-gray-500">
                        Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'React', 'Vite', 'Tailwind', 'LLMs', 'Agent Orchestration', 'Playwright'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
