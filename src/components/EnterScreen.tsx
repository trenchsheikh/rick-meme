"use client";

import { motion } from "framer-motion";
import GlassyButton from "./GlassyButton";
import { useMedia } from "./MediaContext";

export default function EnterScreen() {
    const { enterSite } = useMedia();

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center text-black"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                rotate: -180,
                scale: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-8"
            >
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-center uppercase">
                    Get Rick<br />Rolled
                </h1>

                <GlassyButton
                    text="Enter"
                    onClick={enterSite}
                    className="text-xl px-12 py-6"
                />
            </motion.div>
        </motion.div>
    );
}
