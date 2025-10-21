import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="card"
      onClick={() => setExpanded(!expanded)}
      initial={{ rotateY: 0, scale: 1 }}
      animate={{
        rotateY: expanded ? 180 : 0,
        scale: expanded ? 1.1 : 1,
      }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {!expanded ? (
        <div className="card-front">
          <h2>{title}</h2>
        </div>
      ) : (
        <motion.div
          className="card-back"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>{title}</h2>
          <p>{content}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
