"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface MediaContextType {
    isPlaying: boolean;
    hasEntered: boolean;
    togglePlay: () => void;
    setIsPlaying: (playing: boolean) => void;
    enterSite: () => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function MediaProvider({ children }: { children: React.ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasEntered, setHasEntered] = useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("/audio.mp4");
        audioRef.current.loop = true;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch((e) => console.error("Audio play failed:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const togglePlay = () => setIsPlaying((prev) => !prev);

    const enterSite = () => {
        setHasEntered(true);
        setIsPlaying(true);
    };

    return (
        <MediaContext.Provider value={{ isPlaying, hasEntered, togglePlay, setIsPlaying, enterSite }}>
            {children}
        </MediaContext.Provider>
    );
}

export function useMedia() {
    const context = useContext(MediaContext);
    if (context === undefined) {
        throw new Error("useMedia must be used within a MediaProvider");
    }
    return context;
}
