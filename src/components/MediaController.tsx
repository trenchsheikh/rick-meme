"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useMedia } from "./MediaContext";

export default function MediaController() {
    const { isPlaying, togglePlay } = useMedia();

    return (
        <motion.button
            onClick={togglePlay}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl flex items-center justify-center group hover:bg-white/20 transition-colors cursor-pointer pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
            {isPlaying ? (
                <Pause className="w-8 h-8 md:w-10 md:h-10 text-black fill-black pointer-events-none" />
            ) : (
                <Play className="w-8 h-8 md:w-10 md:h-10 text-black fill-black ml-1 pointer-events-none" />
            )}
        </motion.button>
    );
}
