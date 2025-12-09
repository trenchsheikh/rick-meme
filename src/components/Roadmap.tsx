"use client";

import { motion } from "framer-motion";

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
}

const roadmapItems: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Launch & Community",
    description: "Token launch, community building, and initial marketing campaigns",
    status: "completed",
  },
  {
    phase: "Phase 2",
    title: "Partnerships & Growth",
    description: "Strategic partnerships, exchange listings, and expanded reach",
    status: "in-progress",
  },
  {
    phase: "Phase 3",
    title: "Ecosystem Expansion",
    description: "NFT collection, merchandise, and community-driven initiatives",
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    title: "Global Domination",
    description: "Worldwide recognition, major collaborations, and mainstream adoption",
    status: "upcoming",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative z-10 w-full py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center mb-12 md:mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
            ROADMAP
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-600 tracking-widest uppercase">
            Never Gonna Give You Up
          </p>
        </motion.div>

        {/* Roadmap Items */}
        <div className="space-y-6 md:space-y-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              <div className="p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  {/* Phase Badge */}
                  <div className="flex-shrink-0">
                    <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-bold text-sm md:text-base tracking-wider text-black">
                      {item.phase}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black mb-2 text-black tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                        item.status === "completed"
                          ? "bg-black"
                          : item.status === "in-progress"
                          ? "bg-black animate-pulse"
                          : "bg-gray-400"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

