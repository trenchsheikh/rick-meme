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

            {/* Roadmap Section */}
            <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">
                    🎵 The Rick Roll Roadmap 🎵
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl font-black text-yellow-300 shrink-0">1</span>
                        <div>
                            <p className="font-black text-sm uppercase">Never Gonna Give You Up</p>
                            <p className="text-xs text-gray-700 mt-1">Launch & Initial Rick Roll - We're no strangers to crypto</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-2xl font-black text-yellow-300 shrink-0">2</span>
                        <div>
                            <p className="font-black text-sm uppercase">Never Gonna Let You Down</p>
                            <p className="text-xs text-gray-700 mt-1">Community Building - You know the rules, and so do we</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-2xl font-black text-yellow-300 shrink-0">3</span>
                        <div>
                            <p className="font-black text-sm uppercase">Never Gonna Run Around</p>
                            <p className="text-xs text-gray-700 mt-1">Exchange Listings - We've known each other for so long</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-2xl font-black text-yellow-300 shrink-0">4</span>
                        <div>
                            <p className="font-black text-sm uppercase">Never Gonna Make You Cry</p>
                            <p className="text-xs text-gray-700 mt-1">Partnerships & Collabs - Your heart's been aching but you're too shy to say it</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-2xl font-black text-yellow-300 shrink-0">5</span>
                        <div>
                            <p className="font-black text-sm uppercase">Never Gonna Say Goodbye</p>
                            <p className="text-xs text-gray-700 mt-1">Forever Rick Rolling - Inside we both know what's been going on</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
