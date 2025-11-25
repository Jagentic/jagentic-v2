import React, { useState, useEffect } from 'react';
import { learningBits } from '../../data/tickerData';

// Logo Mapping
const SOURCE_LOGOS = {
    "Hacker News": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg",
    "YouTube": "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    "Andrej Karpathy": "https://yt3.googleusercontent.com/ytc/AIdro_k3qXjYQ_fDr_tGg0y_j5X5h5_5h5_5h5_5h5_5=s176-c-k-c0x00ffffff-no-rj", // Example placeholder or generic
    "Two Minute Papers": "https://yt3.googleusercontent.com/ytc/AIdro_k3qXjYQ_fDr_tGg0y_j5X5h5_5h5_5h5_5h5_5=s176-c-k-c0x00ffffff-no-rj",
    // Fallback to generic YouTube logo if specific one fails or isn't found
};

const getSourceIcon = (sourceString) => {
    if (sourceString.includes("Hacker News")) return SOURCE_LOGOS["Hacker News"];
    if (sourceString.includes("YouTube")) return SOURCE_LOGOS["YouTube"];
    return null;
};

const Tickers = () => {
    const [newsItems, setNewsItems] = useState([]);
    // Use the curated bits directly, duplicated for scrolling
    const learningItems = [...learningBits, ...learningBits];

    useEffect(() => {
        // 1. Fetch Frontier News (API)
        const fetchNews = async () => {
            try {
                const res = await fetch('/api/news');
                if (res.ok) {
                    const data = await res.json();
                    setNewsItems(data);
                } else {
                    throw new Error("API not available");
                }
            } catch (e) {
                console.warn("Using fallback news data (API likely unavailable locally)");
                setNewsItems([
                    { source: "YouTube / Andrej Karpathy", title: "Intro to Large Language Models", url: "#" },
                    { source: "Hacker News", title: "OpenAI releases new reasoning model o1", url: "#" },
                    { source: "YouTube / Two Minute Papers", title: "AI Solves International Math Olympiad Problems", url: "#" },
                    { source: "AI Explained", title: "GPT-5 Rumors and Release Date", url: "#" }
                ]);
            }
        };
        fetchNews();
    }, []);

    if (newsItems.length === 0 && learningItems.length === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-40 flex flex-col pointer-events-none">

            {/* Zone 2: Frontier News (Faster, Thinner) */}
            {newsItems.length > 0 && (
                <div className="w-full bg-black/80 border-t border-white/10 py-2 overflow-hidden flex relative">
                    <div className="animate-scroll-fast whitespace-nowrap flex w-max hover:pause">
                        {/* Duplicated content for seamless loop (4 sets for smoothness) */}
                        {[...newsItems, ...newsItems, ...newsItems, ...newsItems].map((item, idx) => {
                            const icon = getSourceIcon(item.source);
                            // Clean source name (remove "YouTube / " prefix for display if logo is present)
                            const displaySource = item.source.replace("YouTube / ", "");

                            return (
                                <div key={`news-${idx}`} className="flex items-center mx-6 pointer-events-auto">
                                    {icon && <img src={icon} alt="Source" className="w-4 h-4 mr-2 object-contain" />}
                                    <span className="text-accent text-xs uppercase font-bold mr-2 tracking-wider">
                                        {displaySource}
                                    </span>
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
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Zone 1: Learning Bits (Slower, Taller) */}
            {learningItems.length > 0 && (
                <div className="w-full bg-[#0A0A0A] border-t border-white/5 py-4 overflow-hidden flex relative">
                    <div className="animate-scroll-slow whitespace-nowrap flex items-center w-max">
                        {/* Duplicated content for seamless loop (2 sets) */}
                        {[...learningItems, ...learningItems].map((text, idx) => (
                            <div key={`learn-${idx}`} className="flex items-center mx-12">
                                <span className="text-accent-blue text-xl mr-4">◆</span>
                                <span className="text-base text-gray-300 font-light tracking-wide">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tickers;
