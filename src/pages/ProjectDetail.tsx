import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import EmptyState from "../components/EmptyState";

import {
  worksProjects,
  pastWorksProjects,
  playgroundProjects,
} from "../data/projects";

import { Project } from "../types";

// ================= Animations =================
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
  }),
};

// ================= MAIN COMPONENT =================
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Add type field for routing
  const dataset: (Project & { __type: string })[] = [
    ...worksProjects.map((p) => ({ ...p, __type: "works" })),
    ...pastWorksProjects.map((p) => ({ ...p, __type: "pastworks" })),
    ...playgroundProjects.map((p) => ({ ...p, __type: "playground" })),
  ];

  const index = dataset.findIndex((p) => p.slug === slug);
  const project = index !== -1 ? dataset[index] : null;

  const prevProject = index > 0 ? dataset[index - 1] : null;
  const nextProject = index < dataset.length - 1 ? dataset[index + 1] : null;

  const [activeTab, setActiveTab] = useState<string>("");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Scroll ONLY on slug change (⛔ never on hover)
  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (project?.tabs?.length) {
      setActiveTab(project.tabs[0].label);
    }
  }, [slug]);

  // If project not found
  if (!project) {
    return (
      <div className="bg-[#0b0c10] text-white min-h-screen flex flex-col justify-center items-center pt-36 px-6 text-center">
        <EmptyState
          title="Project Not Found"
          description={
            <span>
              This project does not exist. <br />
              <Link
                to="/works"
                className="font-bold hover:underline hover:text-blue-400 transition-colors"
              >
                Return to Works
              </Link>
            </span>
          }
        />
      </div>
    );
  }

  // Download handler
  const handleDownload = (src: string, fileName?: string) => {
    try {
      const a = document.createElement("a");
      a.href = src;
      a.download = fileName ?? src.split("/").pop() ?? "download";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      console.error("Download failed:", e);
    }
  };

  const infoFields = [
    { label: "SERVICES", value: project.services },
    { label: "CLIENT", value: project.client },
    { label: "PROJECT LINK", value: project.link },
    { label: "DURATION", value: project.duration },
  ].filter((i) => i.value);

  const currentTab =
    project.tabs?.find((t) => t.label === activeTab) ??
    project.tabs?.[0] ??
    null;

  return (
    <div className="bg-[#0b0c10] text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-7 pt-36 sm:pt-48 md:pt-56">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            {project.description && (
              <p className="text-gray-400 text-base sm:text-lg">
                {project.description}
              </p>
            )}
          </motion.div>

          {infoFields.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 md:mt-0 md:ml-12"
            >
              {infoFields.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  className="bg-[#1a1c23] px-4 py-3 rounded-lg text-sm hover:scale-105 transition-transform"
                >
                  <p className="text-gray-400 text-xs mb-1">{item.label}</p>
                  <p className="font-semibold text-white truncate">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </header>

        {/* TABS */}
        {project.tabs?.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-10"
          >
            <div className="bg-[#14151b] p-2 rounded-full border border-gray-700/50 flex gap-2 max-w-2xl overflow-x-auto">
              {project.tabs.map((tab) => (
                <motion.button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all relative ${
                    activeTab === tab.label
                      ? "text-white"
                      : "text-gray-400 hover:text-blue-400"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.label && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB CONTENT */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {currentTab ? (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
              {(currentTab.heading || currentTab.description) && (
                <div className="text-center mb-10">
                  {currentTab.heading && (
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">{currentTab.heading}</h2>
                  )}
                  {currentTab.description && (
                    <p className="text-gray-400 max-w-2xl mx-auto">{currentTab.description}</p>
                  )}
                </div>
              )}

              {/* IMAGES */}
              {currentTab.images?.length ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {currentTab.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative group rounded-xl overflow-hidden bg-[#111]"
                      onMouseEnter={() => setHoveredImage(i)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img
                        src={img.src}
                        alt={img.title ?? "Project image"}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* FIXED: Overlay no longer triggers scroll */}
                      <div
                        className={`absolute inset-0 bg-black/60 p-4 flex flex-col justify-end transition-opacity duration-300 ${
                          hoveredImage === i ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        {img.title && (
                          <h3 className="text-lg font-semibold mb-1">{img.title}</h3>
                        )}
                        {img.desc && (
                          <p className="text-gray-300 text-sm mb-2">{img.desc}</p>
                        )}

                        {img.download && (
                          <button
                            onClick={() => handleDownload(img.src, img.download)}
                            className="bg-blue-600 px-3 py-1.5 rounded-md text-xs flex items-center gap-1 hover:opacity-90"
                          >
                            <Download className="w-4 h-4" /> Download
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center mt-10">No content for this tab yet.</p>
              )}
            </motion.div>
          ) : (
            <p className="text-gray-500 text-center mt-10">No content available.</p>
          )}
        </motion.div>

        {/* NEXT / PREVIOUS */}
        <BackToTop />
        <div className="flex justify-between items-center border-t border-gray-800 py-6 relative">

          {/* Prev */}
          {prevProject ? (
            <Link
              to={`/${prevProject.__type}/${prevProject.slug}`}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </Link>
          ) : (
            <span className="text-gray-600 opacity-60 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Previous
            </span>
          )}

          {/* Center info */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <p className="text-gray-500 text-xs mb-1">
              Project {index + 1} of {dataset.length}
            </p>
            <Link
              to="/works"
              className="text-gray-400 hover:text-blue-400 text-xs flex items-center justify-center gap-1"
            >
              <ArrowLeft className="w-3 h-3" /> Back to Works
            </Link>
          </div>

          {/* Next */}
          {nextProject ? (
            <Link
              to={`/${nextProject.__type}/${nextProject.slug}`}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400"
            >
              Next <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="text-gray-600 opacity-60 flex items-center gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
