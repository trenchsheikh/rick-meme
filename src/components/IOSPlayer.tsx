"use client";

import React from "react";

interface IOSPlayerProps {
    videoUrl?: string;
    className?: string;
}

export default function IOSPlayer({ className }: IOSPlayerProps) {

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
                    {/* YouTube Embed */}
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&modestbranding=1&rel=0"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: 'none' }}
                    />
                </div>

                {/* Home Bar */}
                <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full pointer-events-none" />
            </div>
        </div>
    );
}
