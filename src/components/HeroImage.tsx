"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroImage() {
    const { scrollY } = useScroll();
    const [isLoaded, setIsLoaded] = useState(false);

    // Zoom in slightly as the user scrolls down
    const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

    return (
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full origin-center">
            <Image
                src="/images/hero.webp"
                alt="Freaks aesthetics"
                fill
                className={`object-cover opacity-90 transition-all duration-[1000ms] ease-in-out ${
                    isLoaded ? "blur-0 scale-100" : "blur-3xl scale-110"
                }`}
                priority
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAgEAABBAIBBQAAAAAAAAAAAAACAAEDBRESBwQhQYGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQIDMUH/2gAMAwEAAhEDEQA/AA8k2k8UhR0VeGjZLMr+vCiHyXY7lsHRi+e7NE+G+oiinJT6FTLWj//Z"
                onLoad={() => setIsLoaded(true)}
            />
        </motion.div>
    );
}
