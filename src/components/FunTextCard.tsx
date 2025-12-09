"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FunTextCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-black"
        >
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                Never Gonna Let You Down.
            </h2>

            <ul className="space-y-4 font-bold text-sm md:text-base uppercase tracking-wide">
                <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 mt-0.5 text-white shrink-0" />
                    <span>
                        You just got <span className="bg-yellow-300 px-1 text-black">RICKROLLED</span>, and you're loving it
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 mt-0.5 text-white shrink-0" />
                    <span>
                        Join the most iconic meme movement ever
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 mt-0.5 text-white shrink-0" />
                    <span>
                        Spread joy, not scams – <span className="bg-yellow-300 px-1 text-black">RICKROLL</span> responsibly
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 mt-0.5 text-white shrink-0" />
                    <span>
                        Earn memes, not dreams – Never gonna give you up
                    </span>
                </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-white/10">
                <button className="flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors uppercase">
                    <ArrowRight className="w-4 h-4" />
                    Click for Airdrop...
                </button>
            </div>
        </motion.div>
    );
}
