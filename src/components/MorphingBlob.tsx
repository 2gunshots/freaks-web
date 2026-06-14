"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type MorphingBlobProps = {
    className?: string;
};

const BLOB_SIZE = 100;
const CENTER = BLOB_SIZE / 2;

const blobProfiles = [
    [0.84, 0.9, 0.87, 0.79, 0.83, 0.89, 0.86, 0.8],
    [0.88, 0.84, 0.9, 0.82, 0.78, 0.86, 0.91, 0.83],
    [0.8, 0.88, 0.92, 0.86, 0.81, 0.8, 0.89, 0.9],
    [0.9, 0.86, 0.82, 0.88, 0.9, 0.83, 0.8, 0.87],
    [0.85, 0.92, 0.84, 0.88, 0.82, 0.87, 0.9, 0.81],
];

function buildBlobPath(profile: number[]) {
    const pointCount = profile.length;
    const maxRadius = 42;

    const points = profile.map((radiusRatio, index) => {
        const angle = (index / pointCount) * Math.PI * 2 - Math.PI / 2;
        const radius = maxRadius * radiusRatio;

        return {
            x: CENTER + radius * Math.cos(angle),
            y: CENTER + radius * Math.sin(angle),
        };
    });

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < pointCount; i++) {
        const p0 = points[(i - 1 + pointCount) % pointCount];
        const p1 = points[i];
        const p2 = points[(i + 1) % pointCount];
        const p3 = points[(i + 2) % pointCount];

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    return `${path} Z`;
}

const blobPaths = blobProfiles.map(buildBlobPath);
const blobTransforms = [
    { scale: 1, rotate: 0 },
    { scale: 1.03, rotate: -2 },
    { scale: 0.98, rotate: 1.5 },
    { scale: 1.02, rotate: -1.5 },
    { scale: 1, rotate: 2 },
];

export default function MorphingBlob({ className = "" }: MorphingBlobProps) {
    const [blobIndex, setBlobIndex] = useState(0);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const scheduleNextMorph = () => {
            const holdDuration = 3400 + Math.random() * 1800;

            timeoutId = setTimeout(() => {
                setBlobIndex((currentIndex) => {
                    let nextIndex = currentIndex;

                    while (nextIndex === currentIndex) {
                        nextIndex = Math.floor(
                            Math.random() * blobPaths.length,
                        );
                    }

                    return nextIndex;
                });

                scheduleNextMorph();
            }, holdDuration);
        };

        scheduleNextMorph();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <motion.div
            aria-hidden="true"
            className={`relative aspect-square ${className}`}
            animate={blobTransforms[blobIndex]}
            transition={{
                duration: 1.45,
                ease: "easeInOut",
            }}
        >
            <svg
                viewBox={`0 0 ${BLOB_SIZE} ${BLOB_SIZE}`}
                className="h-full w-full overflow-visible"
                role="presentation"
            >
                <motion.path
                    fill="currentColor"
                    animate={{ d: blobPaths[blobIndex] }}
                    transition={{
                        duration: 1.45,
                        ease: "easeInOut",
                    }}
                    d={blobPaths[0]}
                />
            </svg>
        </motion.div>
    );
}
