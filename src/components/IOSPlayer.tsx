"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMedia } from "./MediaContext";
import { motion } from "framer-motion";

interface IOSPlayerProps {
    videoUrl: string;
    className?: string;
}

export default function IOSPlayer({ videoUrl, className }: IOSPlayerProps) {
    const { isPlaying, togglePlay } = useMedia();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

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
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        onClick={togglePlay}
                    />

                    {/* Play Button Overlay */}
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 flex justify-center items-center bg-black/10 cursor-pointer z-10"
                            onClick={togglePlay}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                className="w-[60px] h-[60px] rounded-full bg-white/80 backdrop-blur-md border border-white/30 flex justify-center items-center shadow-lg"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                                    <polygon points="8,5 19,12 8,19" fill="#000" />
                                </svg>
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Home Bar */}
                <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full pointer-events-none" />
            </div>
        </div>
    );
}
