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
    <section id="roadmap" className="relative w-full py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            ROADMAP
          </h2>
          <p className="text-lg md:text-xl text-gray-600 uppercase tracking-widest">
            Never Gonna Give You Up
          </p>
        </motion.div>

        {/* Roadmap Items */}
        <div className="space-y-8 md:space-y-12">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                {/* Phase Badge */}
                <div className="flex-shrink-0">
                  <div
                    className={`px-6 py-3 rounded-full font-bold text-sm md:text-base tracking-wider ${
                      item.status === "completed"
                        ? "bg-green-500/20 text-green-700 border-2 border-green-500"
                        : item.status === "in-progress"
                        ? "bg-blue-500/20 text-blue-700 border-2 border-blue-500"
                        : "bg-gray-500/20 text-gray-700 border-2 border-gray-500"
                    }`}
                  >
                    {item.phase}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {item.description}
                  </p>
                </div>

                {/* Status Indicator */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : item.status === "in-progress"
                        ? "bg-blue-500 animate-pulse"
                        : "bg-gray-300"
                    }`}
                  />
                </div>
              </div>

              {/* Connector Line (except last item) */}
              {index < roadmapItems.length - 1 && (
                <div className="hidden md:block absolute left-[60px] top-[60px] w-0.5 h-12 bg-gray-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

