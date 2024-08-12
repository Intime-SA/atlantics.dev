import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AnimatedDiv = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo desencadenar la animación una vez
    threshold: 0.1, // Porcentaje del elemento visible para activar la animación
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }} // Aumenta el desplazamiento inicial para un efecto más pronunciado
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }} // Aumenta la duración y usa una curva de transición suave
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
