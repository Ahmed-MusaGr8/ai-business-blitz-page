
"use client";

import { Calendar, Code, FileText, User, Zap, ArrowRight } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const aiChallengeTimelineData = [
  {
    id: 1,
    title: "Zero to One Mastery",
    date: "Day 1",
    content: "Learn to validate and launch AI-powered business ideas from scratch, even with zero experience.",
    category: "Foundation",
    icon: Zap,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Scaling Strategies",
    date: "Day 2",
    content: "Discover how to scale one-person operations to billion-dollar enterprises using AI automation.",
    category: "Growth",
    icon: ArrowRight,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "No-Code AI Tools",
    date: "Day 3",
    content: "Master the latest no-code and low-code platforms to build powerful AI applications without programming.",
    category: "Technology",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Billionaire Mentorship",
    date: "Day 4",
    content: "Direct access to successful entrepreneurs who've built and scaled AI-powered businesses.",
    category: "Mentorship",
    icon: User,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Real Networking",
    date: "Day 5",
    content: "Connect with like-minded entrepreneurs, investors, and industry leaders in AI and tech.",
    category: "Community",
    icon: FileText,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 60,
  },
  {
    id: 6,
    title: "Budget-Friendly Building",
    date: "Ongoing",
    content: "Learn to build effective solutions on a budget using smart AI tools and lean methodologies.",
    category: "Optimization",
    icon: Calendar,
    relatedIds: [5],
    status: "pending" as const,
    energy: 40,
  },
];

export function AIBusinessChallengeTimeline() {
  return (
    <RadialOrbitalTimeline timelineData={aiChallengeTimelineData} />
  );
}

export default AIBusinessChallengeTimeline;
