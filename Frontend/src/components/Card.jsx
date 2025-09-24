// frontend/src/components/Card.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const headerVariants = {
  initial: { rotate: 0 },
  spin: { rotate: 360, transition: { duration: 0.6, ease: "easeInOut" } },
};

const cardVariants = {
  closed: { scale: 1, boxShadow: "0 6px 18px rgba(11,38,59,0.06)" },
  open: {
    scale: 1.01,
    boxShadow: "0 20px 40px rgba(11,38,59,0.12)",
    transition: { type: "spring", stiffness: 300, damping: 28 },
  },
};

const detailVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { opacity: { duration: 0.25 }, height: { duration: 0.35, ease: "easeInOut" } },
  },
};

export default function Card({ title, summary, children, icon: Icon, className = "" }) {
  const [open, setOpen] = useState(false);
  // toggle handler used by click and keyboard
  const toggle = () => setOpen((v) => !v);

  return (
    <motion.article
      // root container animates scale + drop shadow when opened
      variants={cardVariants}
      animate={open ? "open" : "closed"}
      initial="closed"
      className={`bg-white rounded-2xl border border-gray-200 p-5 cursor-pointer ${className}`}
      onClick={toggle}
      role="button"
      aria-expanded={open}
      tabIndex={0}
      onKeyDown={(e) => {
        // Allow keyboard toggle via Enter or Space
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      {/* Header: icon + title + summary */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Spin the icon on toggle: we trigger the 'spin' variant only when toggling open */}
          {Icon ? (
            <motion.span
              className="p-2 rounded-lg bg-[#a2dedf] text-[#0d394e] w-10 h-10 flex items-center justify-center"
              // animate spin briefly when opening; use key to retrigger on repeat clicks
              animate={open ? "spin" : "initial"}
              variants={headerVariants}
            >
              <Icon className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.div
              className="w-10 h-10 rounded-lg bg-[#a2dedf] flex items-center justify-center font-bold text-[#0d394e]"
              animate={open ? "spin" : "initial"}
              variants={headerVariants}
            >
              {title?.[0] ?? "A"}
            </motion.div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-[#0d394e]">{title}</h3>
            {summary && <p className="text-sm text-gray-600 mt-1">{summary}</p>}
          </div>
        </div>

        {/* chevron rotates to indicate expanded state */}
        <motion.div
          className="text-gray-400"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden
        >
          {/* simple chevron icon — click handled by parent container */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      {/* Details area: animate open/closed using AnimatePresence */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="mt-4 text-sm text-gray-700 overflow-hidden"
            key="details"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={detailVariants}
          >
            {/* children is the detailed content (experience bullets, project description, etc.) */}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
