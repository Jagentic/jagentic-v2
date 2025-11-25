import React from 'react';
import { RefreshCw, BarChart2, BookOpen } from 'lucide-react';

const ResultsCard = ({ score, totalQuestions, onRestart }) => {
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
        <div className="w-full max-w-2xl bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl text-center animate-in zoom-in-95 duration-300">

            <h2 className="text-4xl font-serif text-white mb-2">Quiz Complete</h2>
            <p className="text-gray-400 mb-10">You've tested your knowledge. Here is how you did.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                    <div className="text-gray-400 text-sm mb-1">Score</div>
                    <div className="text-4xl font-bold text-white">{score}/{totalQuestions}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                    <div className="text-gray-400 text-sm mb-1">Accuracy</div>
                    <div className={`text-4xl font-bold ${percentage >= 70 ? 'text-accent' : 'text-yellow-500'}`}>
                        {percentage}%
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 flex flex-col justify-center items-center cursor-pointer hover:bg-white/10 transition-colors group">
                    <BarChart2 className="w-8 h-8 text-accent-blue mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-accent-blue">Analyze Performance</div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-xl border border-accent/20 mb-10 text-left flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                    <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-1">Keep Learning</h3>
                    <p className="text-sm text-gray-300">
                        Based on your results, we recommend diving deeper into <strong>Agentic Patterns</strong> and <strong>RAG Architectures</strong>.
                    </p>
                </div>
            </div>

            <button
                onClick={onRestart}
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
            >
                <RefreshCw className="w-4 h-4" />
                Take Another Quiz
            </button>

        </div>
    );
};

export default ResultsCard;
