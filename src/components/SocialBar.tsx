"use client";

import { motion } from "framer-motion";
import { Twitter, Send, Instagram, Facebook } from "lucide-react"; // Using Lucide for icons as placeholders

const socials = [
    { name: "X (Twitter)", icon: Twitter, link: "#" },
    { name: "Telegram", icon: Send, link: "#" },
    { name: "Instagram", icon: Instagram, link: "#" },
];

export default function SocialBar() {
    return (
        <div className="flex items-center justify-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-sm">
            {socials.map((social, index) => (
                <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors border border-white/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <social.icon className="w-5 h-5 text-black" />
                </motion.a>
            ))}
        </div>
    );
}
