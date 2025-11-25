import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-end bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
            {/* Logo Section */}
            <div className="flex flex-col items-start transform translate-y-1">
                <h1 className="font-serif text-4xl tracking-[0.4em] text-white lowercase leading-none ml-1">
                    jagentic
                </h1>
                <p className="text-[10px] text-gray-500 tracking-[0.2em] mt-1 font-mono opacity-60 ml-1">
                    opportunities ⊆ aggravations
                </p>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex gap-8 mb-1">
                {['Quiz', 'About', 'Projects', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors uppercase"
                    >
                        {item}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
