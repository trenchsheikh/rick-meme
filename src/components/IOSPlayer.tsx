"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IOSPlayerProps {
    videoUrl?: string;
    className?: string;
}

// All GIFs with the starting one first
const gifs = [
    "/Music Video 80S GIF by Rick Astley.gif",
    "/Music Video Love GIF by Rick Astley (1).gif",
    "/Music Video Love GIF by Rick Astley (2).gif",
    "/Music Video Love GIF by Rick Astley (3).gif",
    "/Dance Dancing GIF by bunny_is_moving.gif",
    "/Rick Astley Dancing GIF.gif",
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
];

// Time each GIF is displayed (in milliseconds)
const GIF_DISPLAY_DURATION = 3000;

export default function IOSPlayer({ className }: IOSPlayerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length);
        }, GIF_DISPLAY_DURATION);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`relative w-[300px] h-[600px] flex justify-center items-center ${className}`}>
            <div
                className="relative w-full h-full bg-[#1a1a1a] rounded-[45px] p-[8px] shadow-2xl flex flex-col"
                style={{
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25), 0 12px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
            >
                {/* Notch */}
                <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-[15px] z-20 pointer-events-none" />

                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[37px] overflow-hidden relative flex flex-col justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={gifs[currentIndex]}
                            alt={`Rick Astley GIF ${currentIndex + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        />
                    </AnimatePresence>
                </div>

                {/* Home Bar */}
                <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full pointer-events-none" />
            </div>
        </div>
    );
}
