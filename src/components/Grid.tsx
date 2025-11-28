// components/Grid.tsx
import React from "react";
import { motion, easeOut } from "framer-motion";
import { Link } from "react-router-dom";
import EmptyState from "./EmptyState";

import {
  worksProjects,
  pastWorksProjects,
  playgroundProjects,
} from "../data/projects";

interface GridProps {
  type?: "works" | "pastworks" | "playground";
  projects?: any[];
  limit?: number;
  accent?: string;
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const Grid: React.FC<GridProps> = ({
  type = "works",
  projects,
  limit = 9,
  accent = "#22d3ee",
}) => {
  const getProjects = () => {
    if (projects?.length) return projects;
    if (type === "works") return worksProjects;
    if (type === "playground") return playgroundProjects;
    return pastWorksProjects;
  };

  const items = getProjects();

  if (!items || items.length === 0) {
    return (
      <div className="w-full flex justify-center py-16">
        <EmptyState reason="No projects found." />
      </div>
    );
  }

  // ALL items go to /works/slug (client requirement)
  const getProjectURL = (project: any) => `/works/${project.slug}`;

  return (
    <motion.div
      layout
      className="px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {items.slice(0, limit).map((project) => (
        <motion.article
          key={project.slug}
          layout
          variants={cardVariants}
          whileHover={{
            y: -6,
            scale: 1.02,
            transition: { duration: 0.22, ease: easeOut },
          }}
          className="group rounded-2xl overflow-hidden bg-secondary/40 border border-gray-700/30 hover:shadow-accent/20 transition-all"
        >
          <Link to={getProjectURL(project)}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110"
                style={{
                  transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="font-semibold text-text-secondary text-lg mb-2">
                {project.title}
              </h3>
              <p
                className="text-text-secondary text-sm group-hover:text-[color:var(--accent)] transition-colors"
                style={{ "--accent": accent } as React.CSSProperties}
              >
                {project.description || project.subtitle || "View Project"}
              </p>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default Grid;
