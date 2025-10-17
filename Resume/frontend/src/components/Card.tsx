// frontend/src/components/Card.jsx
import { motion } from "framer-motion";

const Card = ({ title, children, icon: Icon }) => {
  return (
    <motion.div
      className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 border border-gray-200 flex flex-col gap-4 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3 border-b pb-2">
        {Icon && <Icon className="text-[#0078ac] w-6 h-6" />}
        <h2 className="text-lg font-semibold text-[#0d394e]">{title}</h2>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </motion.div>
  );
};

export default Card;
