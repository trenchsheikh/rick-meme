"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gifs = [
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
    "/gif1.gif", // Repeat for grid effect
    "/gif2.gif",
    "/gif3.gif",
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
];

export default function BackgroundGrid() {
    return (
        <div className="fixed inset-0 z-0 grid grid-cols-2 md:grid-cols-3 gap-0 opacity-20 pointer-events-none">
            {gifs.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative w-full h-full aspect-square"
                >
                    <Image
                        src={src}
                        alt="Rick Roll Background"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        unoptimized // GIFs might need this in Next.js
                    />
                </motion.div>
            ))}
        </div>
    );
}
