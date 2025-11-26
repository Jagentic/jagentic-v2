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
        </div>
    );
};

export default About;
