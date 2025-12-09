"use client";

import { motion } from "framer-motion";
import GlassyButton from "./GlassyButton";

export default function MemeCTA() {
  return (
    <section className="relative z-10 w-full py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 md:gap-12"
        >
          {/* GIF Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md md:max-w-lg">
              <img
                src="/Rick Astley Dancing GIF.gif"
                alt="Rick Astley Dancing"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-yellow-300/20 blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
                READY TO GET
                <br />
                <span className="bg-yellow-300 px-4 md:px-6 text-black inline-block">
                  RICK ROLLED?
                </span>
              </h2>
              <p className="text-xl md:text-2xl font-medium text-gray-600 tracking-widest uppercase">
                Never Gonna Give You Up
              </p>
            </div>

            {/* Funny Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl max-w-2xl mx-auto"
            >
              <p className="text-lg md:text-xl font-bold text-black mb-4">
                You've been scrolling this whole time...
              </p>
              <p className="text-base md:text-lg text-gray-600">
                You know the rules, and so do we. Join the most legendary meme
                movement in crypto history. Don't let us down – let's make
                history together! 🎵
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              <GlassyButton
                text="🚀 Buy Now"
                onClick={() => {
                  // Scroll to top or trigger buy action
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6"
              />
              <GlassyButton
                text="📱 Join Community"
                onClick={() => {
                  // Open community links or socials
                  const socialBar = document.querySelector('[data-social-bar]');
                  if (socialBar) {
                    socialBar.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
                className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6"
              />
            </motion.div>

            {/* Final Meme Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest"
            >
              *We're never gonna run around and desert you*
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

