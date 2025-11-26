import React from 'react';

const Contact = () => {
    return (
        <div className="w-full max-w-4xl mx-auto text-white p-8 animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl font-serif tracking-wider mb-6">
                Contact
            </h1>
            <p className="text-xl text-gray-400 font-light mb-8">
                Get in touch with the Jagentic Team.
            </p>
            <a
                href="mailto:hello@jagentic.net"
                className="inline-block px-8 py-3 bg-accent text-black font-bold tracking-widest uppercase rounded hover:bg-white transition-colors"
            >
                Email Us
            </a>
        </div>
    );
};

export default Contact;
