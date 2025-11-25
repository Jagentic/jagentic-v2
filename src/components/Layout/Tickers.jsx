import React from 'react';
import { learningBits, frontierNews } from '../../data/newsData';

const TickerItem = ({ text, type }) => (
    <span className={`inline-block mx-8 ${type === 'news' ? 'font-bold text-white' : 'text-gray-300'}`}>
        {text}
    </span>
);

const Tickers = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-40 flex flex-col pointer-events-none">

            {/* Zone 2: Frontier News (Faster, Thinner) */}
            <div className="w-full bg-black/80 border-t border-white/10 py-2 overflow-hidden flex relative">
                <div className="animate-scroll-fast whitespace-nowrap flex w-max">
                    {/* Duplicated content for seamless loop (2 sets) */}
                    {[...frontierNews, ...frontierNews, ...frontierNews, ...frontierNews].map((item, idx) => (
                        <div key={`news-${idx}`} className="flex items-center mx-6">
                            <span className="text-accent text-xs uppercase font-bold mr-2 tracking-wider">[{item.source}]</span>
                            <span className="text-sm text-gray-200">{item.title}</span>
                            <span className="mx-4 text-gray-600">/</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Zone 1: Learning Bits (Slower, Taller) */}
            <div className="w-full bg-[#0A0A0A] border-t border-white/5 py-4 overflow-hidden flex relative">
                <div className="animate-scroll-slow whitespace-nowrap flex items-center w-max">
                    {/* Duplicated content for seamless loop (2 sets) */}
                    {[...learningBits, ...learningBits, ...learningBits, ...learningBits].map((text, idx) => (
                        <div key={`learn-${idx}`} className="flex items-center mx-8">
                            <span className="text-accent-blue text-xl mr-3">◆</span>
                            <span className="text-base text-gray-400 font-light tracking-wide">{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tickers;
