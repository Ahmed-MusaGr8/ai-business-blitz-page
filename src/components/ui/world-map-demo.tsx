
"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="py-20 dark:bg-slate-900 bg-slate-900 w-full">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <motion.p 
          className="font-bold text-2xl md:text-3xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Global Challenge Participants
        </motion.p>
        <motion.p 
          className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Entrepreneurs from around the world are joining the challenge - both online and at our Silicon Valley headquarters
        </motion.p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 37.4419,
              lng: -122.1430,
            }, // Silicon Valley (HQ)
            end: {
              lat: 40.7128,
              lng: -74.0060,
            }, // New York
          },
          {
            start: { lat: 37.4419, lng: -122.1430 }, // Silicon Valley (HQ)
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: 37.4419, lng: -122.1430 }, // Silicon Valley (HQ)
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
