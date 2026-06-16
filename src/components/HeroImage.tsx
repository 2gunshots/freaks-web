"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroImage() {
    const { scrollY } = useScroll();

    // Zoom in slightly as the user scrolls down
    const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

    return (
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full origin-center">
            <Image
                src="/images/hero.webp"
                alt="Freaks aesthetics"
                fill
                className="object-cover opacity-90"
                priority
                sizes="100vw"
            />
        </motion.div>
    );
}
