import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../../data/quizData';

const Tickers = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [learningItems, setLearningItems] = useState([]);

    useEffect(() => {
        // 1. Fetch Frontier News (API)
        const fetchNews = async () => {
            try {
                const res = await fetch('/api/news');
                if (res.ok) {
                    const data = await res.json();
                    setNewsItems(data);
                }
            } catch (e) {
                console.error("Failed to fetch news ticker", e);
            }
        };
        fetchNews();

        // 2. Generate Learning Bits (Local Data)
        const generateLearningBits = () => {
            // Shuffle questions and pick 20
            const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random()).slice(0, 20);
            // Format: "Category: Question -> Answer"
            const bits = shuffled.map(q => {
                // Truncate long questions
                const shortQ = q.question.length > 60 ? q.question.substring(0, 60) + "..." : q.question;
                // Get correct answer text
                const answerText = q.options[q.correctAnswer];
                return `${q.category}: ${shortQ} \u2192 ${answerText}`;
            });
            setLearningItems(bits);
        };
        generateLearningBits();
    }, []);

    if (newsItems.length === 0 && learningItems.length === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-40 flex flex-col pointer-events-none">

            {/* Zone 2: Frontier News (Faster, Thinner) */}
            {newsItems.length > 0 && (
                <div className="w-full bg-black/80 border-t border-white/10 py-2 overflow-hidden flex relative">
                    <div className="animate-scroll-fast whitespace-nowrap flex w-max hover:pause">
                        {/* Duplicated content for seamless loop (4 sets for smoothness) */}
                        {[...newsItems, ...newsItems, ...newsItems, ...newsItems].map((item, idx) => (
                            <div key={`news-${idx}`} className="flex items-center mx-6 pointer-events-auto">
                                <span className="text-accent text-xs uppercase font-bold mr-2 tracking-wider">[{item.source}]</span>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-200 hover:text-accent transition-colors"
                                >
                                    {item.title}
                                </a>
                                <span className="mx-4 text-gray-600">/</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Zone 1: Learning Bits (Slower, Taller) */}
            {learningItems.length > 0 && (
                <div className="w-full bg-[#0A0A0A] border-t border-white/5 py-4 overflow-hidden flex relative">
                    <div className="animate-scroll-slow whitespace-nowrap flex items-center w-max">
                        {/* Duplicated content for seamless loop (2 sets) */}
                        {[...learningItems, ...learningItems].map((text, idx) => (
                            <div key={`learn-${idx}`} className="flex items-center mx-8">
                                <span className="text-accent-blue text-xl mr-3">◆</span>
                                <span className="text-base text-gray-400 font-light tracking-wide">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tickers;
