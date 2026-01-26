import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    y?: number;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    width = "100%",
    delay = 0.2,
    duration = 0.5,
    y = 30
}) => {
    return (
        <motion.div
            style={{ width, position: 'relative' }}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Fast out, slow end (elegant)
            }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
