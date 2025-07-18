
"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  centralHub?: { lat: number; lng: number; label?: string };
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  centralHub,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  // Memoize the map creation for better performance
  const { svgMap, projectPoint, createCurvedPath } = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    
    const svgMap = map.getSVG({
      radius: 0.22,
      color: "#FFFFFF80", // Fixed white dots for black background
      shape: "circle",
      backgroundColor: "black", // Fixed black background
    });

    const projectPoint = (lat: number, lng: number) => {
      const x = (lng + 180) * (800 / 360);
      const y = (90 - lat) * (400 / 180);
      return { x, y };
    };

    const createCurvedPath = (
      start: { x: number; y: number },
      end: { x: number; y: number }
    ) => {
      const midX = (start.x + end.x) / 2;
      const midY = Math.min(start.y, end.y) - 50;
      return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return { svgMap, projectPoint, createCurvedPath };
  }, []);

  // Memoize projected points for better performance
  const projectedDots = useMemo(() => {
    return dots.map(dot => ({
      ...dot,
      startPoint: projectPoint(dot.start.lat, dot.start.lng),
      endPoint: projectPoint(dot.end.lat, dot.end.lng)
    }));
  }, [dots, projectPoint]);

  // Project central hub if provided
  const projectedCentralHub = useMemo(() => {
    return centralHub ? projectPoint(centralHub.lat, centralHub.lng) : null;
  }, [centralHub, projectPoint]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="w-full aspect-[2/1] bg-black rounded-lg relative font-sans">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="world map"
          draggable={false}
        />
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
        >
          {/* Nigeria highlight - approximate outline */}
          {centralHub && (
            <g key="nigeria-highlight">
              <motion.circle
                cx={projectedCentralHub?.x}
                cy={projectedCentralHub?.y}
                r="8"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.circle
                cx={projectedCentralHub?.x}
                cy={projectedCentralHub?.y}
                r="12"
                fill="none"
                stroke="#10B981"
                strokeWidth="1"
                opacity="0.6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                <animate
                  attributeName="r"
                  from="12"
                  to="20"
                  dur="3s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0.1"
                  dur="3s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            </g>
          )}

          {projectedDots.map((dot, i) => (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(dot.startPoint, dot.endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="central-hub-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </radialGradient>
          </defs>

          {/* Central Hub (Nigeria) - Special styling */}
          {centralHub && projectedCentralHub && (
            <g key="central-hub">
              <motion.circle
                cx={projectedCentralHub.x}
                cy={projectedCentralHub.y}
                r="4"
                fill="#10B981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <circle
                cx={projectedCentralHub.x}
                cy={projectedCentralHub.y}
                r="4"
                fill="#10B981"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  from="4"
                  to="12"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )}

          {projectedDots.map((dot, i) => (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={dot.startPoint.x}
                  cy={dot.startPoint.y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={dot.startPoint.x}
                  cy={dot.startPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={dot.endPoint.x}
                  cy={dot.endPoint.y}
                  r="2"
                  fill={lineColor}
                />
                <circle
                  cx={dot.endPoint.x}
                  cy={dot.endPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
