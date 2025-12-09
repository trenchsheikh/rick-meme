"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface GlassyButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string;
}

export default function GlassyButton({ text, onClick, href, className = "" }: GlassyButtonProps) {
    const [hovered, setHovered] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMouse({ x, y });
    };

    const commonProps = {
        ref: buttonRef,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onMouseMove: handleMouseMove,
        className: `relative overflow-hidden rounded-full px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group transition-all duration-300 ${className}`,
        whileHover: { scale: 1.05, y: -2 },
        whileTap: { scale: 0.95 },
        style: {
            boxShadow: hovered
                ? "0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)"
                : "0 10px 20px rgba(0,0,0,0.05)",
        },
    };

    if (href) {
        return (
            <motion.a
                {...commonProps}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* Shine Effect */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(255,255,255,0.4), transparent 60%)`,
                    }}
                />

                {/* Text */}
                <span className="relative z-10 text-black font-bold tracking-wide uppercase">
                    {text}
                </span>
            </motion.a>
        );
    }

    return (
        <motion.button
            {...commonProps}
            onClick={onClick}
        >
            {/* Shine Effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(255,255,255,0.4), transparent 60%)`,
                }}
            />

            {/* Text */}
            <span className="relative z-10 text-black font-bold tracking-wide uppercase">
                {text}
            </span>
        </motion.button>
    );
}
