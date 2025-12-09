"use client";

import { AnimatePresence, motion } from "framer-motion";
import BackgroundGrid from "@/components/BackgroundGrid";
import IOSPlayer from "@/components/IOSPlayer";
import MediaController from "@/components/MediaController";
import GlassyButton from "@/components/GlassyButton";
import SocialBar from "@/components/SocialBar";
import EnterScreen from "@/components/EnterScreen";
import FunTextCard from "@/components/FunTextCard";
import MemeCTA from "@/components/MemeCTA";
import { useMedia } from "@/components/MediaContext";

function MainContent() {
  return (
    <motion.div
      className="relative z-10 w-full flex flex-col items-center gap-8 py-12 md:py-20 px-4"
      initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter">
          RICK ROLL
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-600 tracking-widest uppercase">
          Never Gonna Give You Up
        </p>
      </div>

      {/* Main Content Grid - Mobile: Stacked, Desktop: Side-by-side */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">

        {/* Left Column: Player */}
        <div className="flex justify-center md:justify-end md:-mt-16">
          <IOSPlayer className="scale-90 md:scale-100" />
        </div>

        {/* Right Column: Actions & Info */}
        <div className="flex flex-col items-center md:items-start gap-8">

          {/* CA Button */}
          <div className="flex flex-col items-center md:items-start gap-2 w-full">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Contract Address</span>
            <GlassyButton
              text="CA: xxxxxxx"
              className="w-full md:w-auto text-lg font-mono"
            // onClick={() => navigator.clipboard.writeText("xxxxxxx")} 
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
            <GlassyButton text="How to Buy" />
          </div>

          {/* Socials */}
          <div className="mt-4">
            <SocialBar />
          </div>

          <FunTextCard />

        </div>
      </div>

    </motion.div>
  );
}

function FullPageContent() {
  return (
    <>
      <MainContent />
      <MemeCTA />
    </>
  );
}

export default function Home() {
  const { hasEntered } = useMedia();

  return (
    <main className="relative w-full bg-white text-black overflow-x-hidden">
      <BackgroundGrid />
      
      {/* Media Controller - Always visible at top */}
      {hasEntered && <MediaController />}

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <EnterScreen key="enter" />
        ) : (
          <div className="flex flex-col items-center">
            <FullPageContent key="main" />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
