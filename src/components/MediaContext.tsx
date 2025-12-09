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
        // Create audio element with better browser compatibility
        const audio = document.createElement("audio");
        audio.loop = true;
        audio.volume = 0.7; // Set a reasonable volume level
        audio.preload = "auto"; // Preload the audio for better performance
        
        // Try multiple audio formats for better browser compatibility
        // MP4 (AAC codec) - most common
        const sourceMp4 = document.createElement("source");
        sourceMp4.src = "/audio.mp4";
        sourceMp4.type = "audio/mp4; codecs=\"mp4a.40.2\"";
        audio.appendChild(sourceMp4);
        
        // Fallback: try rick-roll.mp4 if audio.mp4 fails
        const sourceFallback = document.createElement("source");
        sourceFallback.src = "/rick-roll.mp4";
        sourceFallback.type = "audio/mp4; codecs=\"mp4a.40.2\"";
        audio.appendChild(sourceFallback);
        
        // Create named handlers for proper cleanup
        const handleError = (e: Event) => {
            const audioEl = e.target as HTMLAudioElement;
            if (audioEl.error) {
                console.error("Audio error code:", audioEl.error.code);
                console.error("Audio error message:", audioEl.error.message);
                // Try to use fallback if available
                if (audioEl.error.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
                    console.warn("Audio format not supported, trying fallback...");
                }
            } else {
                console.error("Audio loading error:", e);
            }
        };

        const handleCanPlay = () => {
            console.log("Audio ready to play");
        };

        const handleLoadedData = () => {
            console.log("Audio data loaded successfully");
        };

        const handleLoadStart = () => {
            console.log("Audio loading started");
        };
        
        // Handle audio loading errors
        audio.addEventListener("error", handleError);
        audio.addEventListener("canplaythrough", handleCanPlay);
        audio.addEventListener("loadeddata", handleLoadedData);
        audio.addEventListener("loadstart", handleLoadStart);

        // Load the audio
        audio.load();

        audioRef.current = audio;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener("error", handleError);
                audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
                audioRef.current.removeEventListener("loadeddata", handleLoadedData);
                audioRef.current.removeEventListener("loadstart", handleLoadStart);
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
