"use client";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ── types ──────────────────────────────────────────────────────────────────────

type Star = {
    id: number;
    top: number;
    left: number;
    size: number;
    fadeInDuration: number;
    color: string;
    baseOpacity: number;
    flickerPeak: number;
};

// ── constants ──────────────────────────────────────────────────────────────────

// layout
const PADDING = 10;
const MAX_POSITION_ATTEMPTS = 20;

// star appearance
const COLORS = ["#000000"];
const MIN_SIZE = 10;
const MAX_SIZE = 30;

// spawn timing
const SPAWN_DELAY_MIN = 400;
const SPAWN_DELAY_MAX = 1300;

// lifetime
const LIFETIME_MIN = 8000;
const LIFETIME_MAX = 17000;

// fade in
const FADE_IN_MIN = 3;
const FADE_IN_MAX = 5;

// opacity
const BASE_OPACITY_MIN = 0.7;
const BASE_OPACITY_MAX = 0.95;

// flicker
const FLICKER_DELAY_MIN = 500;
const FLICKER_DELAY_MAX = 2500;
const FLICKER_DURATION_MIN = 0.15;
const FLICKER_DURATION_MAX = 0.3;
const FLICKER_PEAK_MIN = 0.85;
const FLICKER_PEAK_MAX = 1;

// exit
const EXIT_DURATION = 15;

// Lives outside React — sync reads/writes, zero re-render cost
const activeStars = new Map<
    number,
    { cx: number; cy: number; radius: number }
>();

function buildStarPath(size: number): string {
    const h = size / 2;
    const ir = h * 0.36;
    const pts = Array.from({ length: 8 }, (_, i) => {
        const angle = (i * Math.PI) / 4 - Math.PI / 2;
        const r = i % 2 === 0 ? h : ir;
        return `${h + r * Math.cos(angle)},${h + r * Math.sin(angle)}`;
    });
    return `M${pts.join("L")}Z`;
}

function findPosition(
    size: number,
    containerW: number,
    containerH: number,
): { cx: number; cy: number; r: number } | null {
    const margin = size * 0.5;
    const r = size / 2;

    for (let i = 0; i < MAX_POSITION_ATTEMPTS; i++) {
        const cx = margin + Math.random() * (containerW - margin * 2);
        const cy = margin + Math.random() * (containerH - margin * 2);

        let overlaps = false;
        for (const s of activeStars.values()) {
            if (Math.hypot(cx - s.cx, cy - s.cy) < r + s.radius + PADDING) {
                overlaps = true;
                break;
            }
        }
        if (!overlaps) return { cx, cy, r };
    }
    return null;
}

function FlickerLayer({
    children,
    baseOpacity,
    peak,
}: {
    children: React.ReactNode;
    baseOpacity: number;
    peak: number;
}) {
    const duration =
        FLICKER_DELAY_MIN / 1000 +
        Math.random() * ((FLICKER_DELAY_MAX - FLICKER_DELAY_MIN) / 1000);

    return (
        <motion.div
            animate={{
                opacity: [
                    baseOpacity,
                    baseOpacity,
                    peak,
                    baseOpacity,
                    baseOpacity,
                ],
            }}
            transition={{
                duration,
                times: [0, 0.6, 0.7, 0.8, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.random() * 2, // adds randomness between loops
            }}
            style={{ width: "100%", height: "100%" }}
        >
            {children}
        </motion.div>
    );
}

function StarItem({ star }: { star: Star }) {
    const controls = useAnimation();

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const triggerFlicker = () => {
            const delay =
                FLICKER_DELAY_MIN +
                Math.random() * (FLICKER_DELAY_MAX - FLICKER_DELAY_MIN);

            timer = setTimeout(async () => {
                // spike up + return quickly
                await controls.start({
                    opacity: [
                        star.baseOpacity,
                        star.flickerPeak,
                        star.baseOpacity,
                    ],
                    transition: {
                        duration:
                            FLICKER_DURATION_MIN +
                            Math.random() *
                                (FLICKER_DURATION_MAX - FLICKER_DURATION_MIN),
                        times: [0, 0.4, 1],
                        ease: "easeOut",
                    },
                });

                triggerFlicker();
            }, delay);
        };

        triggerFlicker();
        return () => clearTimeout(timer);
    }, [controls, star]);

    return (
        <motion.div
            style={{
                position: "absolute",
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                zIndex: 0,
            }}
            initial={{
                opacity: 0,
                filter: "blur(10px)",
                scale: 0.1,
            }}
            animate={{
                opacity: star.baseOpacity,
                filter: "blur(0px)",
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0,
                transition: { duration: EXIT_DURATION, ease: "easeIn" },
            }}
            transition={{
                duration: star.fadeInDuration,
                ease: [0.4, 0, 0.2, 1],
            }}
        >
            <FlickerLayer
                baseOpacity={star.baseOpacity}
                peak={star.flickerPeak}
            >
                <svg
                    width={star.size}
                    height={star.size}
                    viewBox={`0 0 ${star.size} ${star.size}`}
                    style={{
                        overflow: "visible",
                        filter: `drop-shadow(0 0 ${star.size * 0.45}px ${star.color}88)`,
                    }}
                >
                    <path d={buildStarPath(star.size)} fill={star.color} />
                </svg>
            </FlickerLayer>
        </motion.div>
    );
}

// ── StarField ──────────────────────────────────────────────────────────────────

export default function StarField() {
    const [stars, setStars] = useState<Star[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const spawnStar = () => {
            const el = containerRef.current;
            if (!el) return;

            const { width, height } = el.getBoundingClientRect();
            const size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
            const pos = findPosition(size, width, height);
            if (!pos) return; // screen full, skip cycle

            const { cx, cy, r } = pos;
            const id = Date.now() + Math.random();
            const lifetime =
                LIFETIME_MIN + Math.random() * (LIFETIME_MAX - LIFETIME_MIN);

            activeStars.set(id, { cx, cy, radius: r });

            setStars((prev) => [
                ...prev,
                {
                    id,
                    top: cy - r,
                    left: cx - r,
                    size,
                    fadeInDuration:
                        FADE_IN_MIN +
                        Math.random() * (FADE_IN_MAX - FADE_IN_MIN),
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                    baseOpacity:
                        BASE_OPACITY_MIN +
                        Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN),

                    flickerPeak:
                        FLICKER_PEAK_MIN +
                        Math.random() * (FLICKER_PEAK_MAX - FLICKER_PEAK_MIN),
                },
            ]);

            setTimeout(() => {
                activeStars.delete(id);
                setStars((prev) => prev.filter((s) => s.id !== id));
            }, lifetime);
        };

        const scheduleNext = () => {
            const delay =
                SPAWN_DELAY_MIN +
                Math.random() * (SPAWN_DELAY_MAX - SPAWN_DELAY_MIN);
            return setTimeout(() => {
                spawnStar();
                timer = scheduleNext();
            }, delay);
        };

        let timer = scheduleNext();
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none"
        >
            <AnimatePresence>
                {stars.map((star) => (
                    <StarItem key={star.id} star={star} />
                ))}
            </AnimatePresence>
        </div>
    );
}
