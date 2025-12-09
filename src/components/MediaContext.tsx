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
        // Initialize audio with proper settings for production
        const audio = new Audio("/audio.mp4");
        audio.loop = true;
        audio.volume = 0.7; // Set a reasonable volume level
        audio.preload = "auto"; // Preload the audio for better performance
        
        // Create named handlers for proper cleanup
        const handleError = (e: Event) => {
            console.error("Audio loading error:", e);
        };

        const handleCanPlay = () => {
            console.log("Audio ready to play");
        };
        
        // Handle audio loading errors
        audio.addEventListener("error", handleError);

        // Handle audio can play event
        audio.addEventListener("canplaythrough", handleCanPlay);

        audioRef.current = audio;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener("error", handleError);
                audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                // Use a promise chain to handle autoplay policies
                const playPromise = audioRef.current.play();
                
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log("Audio playing successfully");
                        })
                        .catch((error) => {
                            console.error("Audio play failed (autoplay policy):", error);
                            // Try to play again after a short delay
                            setTimeout(() => {
                                if (audioRef.current && isPlaying) {
                                    audioRef.current.play().catch((e) => {
                                        console.error("Retry audio play failed:", e);
                                    });
                                }
                            }, 100);
                        });
                }
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
