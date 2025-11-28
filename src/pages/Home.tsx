// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Components
import SocialLinks from "../components/SocialLinks";
import SplashCursor from "../components/SplashCursor";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SpotlightCard from "../components/SpotlightCard";
import Grid from "../components/Grid";

// Icons & Images
import profileImg from "../images/profile.svg";
import mapIcon from "../icons/map-pin.svg";
import graduateIcon from "../icons/palette.svg";
import aboutIcon from "../icons/aboutme.svg";
import skillsIcon from "../icons/skills.svg";

// Skills Icons
import photoshopIcon from "../icons/photoshop.svg";
import illustratorIcon from "../icons/illustrator.svg";
import figmaIcon from "../icons/figma.svg";
import xdIcon from "../icons/xd.svg";
import procreateIcon from "../icons/procreate.svg";
import aftereffectsIcon from "../icons/aftereffects.svg";
import premiereproIcon from "../icons/premierepro.svg";
import lightroomIcon from "../icons/lightroom.svg";

// Animations
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" } as Transition,
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } as Transition },
};

// Memoized Components
const MemoSocialLinks = React.memo(SocialLinks);
const MemoFooter = React.memo(Footer);
const MemoBackToTop = React.memo(BackToTop);

const Home: React.FC = () => {
  const skills = [
    { name: "Photoshop", icon: photoshopIcon },
    { name: "Illustrator", icon: illustratorIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "XD", icon: xdIcon },
    { name: "Procreate", icon: procreateIcon },
    { name: "After Effects", icon: aftereffectsIcon },
    { name: "Premiere Pro", icon: premiereproIcon },
    { name: "Lightroom", icon: lightroomIcon },
  ];

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    setIsMobile(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handler);
      else mql.removeListener(handler);
    };
  }, []);

  const vpMobile = { once: true, amount: 0.05 };
  const vpDesktop = { once: true, amount: 0.2 as const };

  return (
    <>
      <Helmet>
        <title>NITTIN | Home</title>
        <meta
          name="description"
          content="Art. Logic. Identity. — Visual systems and motion design by NITTIN."
        />
      </Helmet>

      <div className="relative z-10 min-h-screen bg-background text-white overflow-hidden">
        {/* Cursor */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <SplashCursor />
        </div>

        {/* HERO */}
        <section className="pt-36 sm:pt-48 md:pt-56 pb-10 relative z-10">
          <div className="max-w-6xl mx-auto text-center px-7">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg"
            >
              <img src={profileImg} className="w-full h-full" loading="lazy" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vpDesktop}
              className="max-w-3xl mx-auto"
            >
              <h1 className="font-mono text-3xl md:text-5xl font-bold leading-snug">
                Hi, I'm{" "}
                <motion.span
                  className="text-accent"
                  animate={{ color: ["#22d3ee", "#e879f9", "#22d3ee"] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                >
                  Nitinfiny
                </motion.span>
                .
              </h1>

              <h2 className="font-mono text-lg md:text-2xl text-text-secondary mt-3 mb-8">
                Designer, Artist, Creator.
              </h2>

              {/* Details */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={vpDesktop}
                className="flex flex-wrap justify-center items-center gap-5 mb-6 text-text-secondary"
              >
                <motion.div variants={fadeUp} className="flex gap-2 items-center">
                  <img src={graduateIcon} className="w-4" />
                  <span>Visual CG Artist</span>
                </motion.div>

                <motion.div variants={fadeUp} className="flex gap-2 items-center">
                  <img src={mapIcon} className="w-4" />
                  <span>Remote</span>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <MemoSocialLinks />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT & SKILLS */}
        <section className="py-10 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-7">

            {/* ABOUT CARD */}
            <SpotlightCard className="p-7 rounded-2xl shadow-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vpDesktop}
              >
                <div className="flex gap-3 items-center mb-4">
                  <img src={aboutIcon} className="w-6" />
                  <h3 className="text-xl font-mono font-semibold">About Me</h3>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  I’m a visual CG artist focused on design, motion, and
                  illustration — blending structure with creativity to build
                  visuals that feel deliberate and expressive.
                </p>
              </motion.div>
            </SpotlightCard>

            {/* SKILLS CARD */}
            <SpotlightCard className="p-7 rounded-2xl shadow-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vpDesktop}
              >
                <div className="flex gap-3 items-center mb-5">
                  <img src={skillsIcon} className="w-6" />
                  <h3 className="text-xl font-mono font-semibold">Tools & Skills</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => {
                    const active = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 text-sm cursor-default"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <motion.img
                          src={skill.icon}
                          className="w-5"
                          variants={{
                            rest: { rotate: 0 },
                            hover: { rotate: [0, -10, 10, -10, 10, 0] },
                          }}
                          animate={active ? "hover" : "rest"}
                        />

                        <motion.span
                          variants={{
                            rest: { color: "#9ca3af" },
                            hover: { color: "#ffffff" },
                          }}
                          animate={active ? "hover" : "rest"}
                          className="transition-colors"
                        >
                          {skill.name}
                        </motion.span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </SpotlightCard>
          </div>
        </section>

        {/* PAST WORK */}
        <section className="py-10 relative z-10">
          <div className="max-w-6xl mx-auto px-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={isMobile ? vpMobile : vpDesktop}
              className="text-center mb-8"
            >
              <h2 className="font-mono text-3xl font-bold">Past Work</h2>
            </motion.div>

            <Grid type="pastworks" limit={9} accent="#22d3ee" />
          </div>
        </section>

        <MemoBackToTop />
        <MemoFooter />
      </div>
    </>
  );
};

export default Home;
