import React, { useState } from 'react';
import { quizQuestions } from '../../data/quizData';
import { Save, Copy, Check } from 'lucide-react';

const CuratorDashboard = () => {
    const [questions, setQuestions] = useState(quizQuestions);
    const [copied, setCopied] = useState(false);

    const handleUpdate = (id, field, value) => {
        setQuestions(questions.map(q =>
            q.id === id ? { ...q, [field]: value } : q
        ));
    };

    const handleOptionUpdate = (id, idx, value) => {
        setQuestions(questions.map(q => {
            if (q.id !== id) return q;
            const newOptions = [...q.options];
            newOptions[idx] = value;
            return { ...q, options: newOptions };
        }));
    };

    const copyToClipboard = () => {
        const json = JSON.stringify(questions, null, 2);
        const exportString = `export const quizQuestions = ${json};`;
        navigator.clipboard.writeText(exportString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background text-white p-8 pb-32">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8 sticky top-0 bg-background/95 backdrop-blur z-50 py-4 border-b border-white/10">
                    <div>
                        <h1 className="font-serif text-3xl">Curator Dashboard</h1>
                        <p className="text-gray-400 text-sm">Refine questions. Harden distractors. Export.</p>
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="bg-accent text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-accent/90 transition-colors"
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied!" : "Copy JSON"}
                    </button>
                </div>

                <div className="space-y-12">
                    {questions.map((q, qIdx) => (
                        <div key={q.id} className="bg-card border border-white/10 rounded-xl p-6">
                            <div className="flex gap-4 mb-4">
                                <span className="font-mono text-accent opacity-50">#{q.id}</span>
                                <input
                                    className="bg-transparent text-xl font-bold w-full border-b border-transparent focus:border-accent outline-none"
                                    value={q.question}
                                    onChange={(e) => handleUpdate(q.id, 'question', e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Distractors & Answer</label>
                                    {q.options.map((opt, oIdx) => (
                                        <div key={oIdx} className="flex items-start gap-3">
                                            <div className={`mt-3 w-3 h-3 rounded-full ${oIdx === q.correctAnswer ? 'bg-accent' : 'bg-red-500/50'}`} />
                                            <textarea
                                                className="w-full bg-white/5 rounded p-3 text-sm border border-transparent focus:border-white/20 outline-none resize-none h-20"
                                                value={opt}
                                                onChange={(e) => handleOptionUpdate(q.id, oIdx, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-gray-500 block mb-2">Explanation</label>
                                        <textarea
                                            className="w-full bg-white/5 rounded p-3 text-sm border border-transparent focus:border-white/20 outline-none resize-none h-32"
                                            value={q.explanation || ''}
                                            onChange={(e) => handleUpdate(q.id, 'explanation', e.target.value)}
                                            placeholder="Why is the answer correct? Why are others wrong?"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-gray-500 block mb-2">Hint</label>
                                        <input
                                            className="w-full bg-white/5 rounded p-3 text-sm border border-transparent focus:border-white/20 outline-none"
                                            value={q.hint || ''}
                                            onChange={(e) => handleUpdate(q.id, 'hint', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CuratorDashboard;
