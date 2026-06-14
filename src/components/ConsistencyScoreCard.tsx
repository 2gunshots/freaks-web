"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CONSISTENCY_STAGES = [
    { label: "Origin", score: "16%", image: "/images/Origin blank.png" },
    { label: "Forming", score: "30%", image: "/images/Forming blank.png" },
    { label: "Core", score: "48%", image: "/images/Core blank.png" },
    { label: "Prime", score: "81%", image: "/images/Prime blank.png" },
    { label: "Apex", score: "97%", image: "/images/Apex blank.png" },
] as const;

const HOLD_DURATION_MS = 7000;
const TRANSITION_DURATION_MS = 650;

export default function ConsistencyScoreCard() {
    const [activeIndex, setActiveIndex] = useState(2);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        let holdTimeout: number | undefined;
        let swapTimeout: number | undefined;
        let settleTimeout: number | undefined;

        const scheduleNextSwap = () => {
            holdTimeout = window.setTimeout(() => {
                setIsTransitioning(true);

                swapTimeout = window.setTimeout(() => {
                    setActiveIndex((currentIndex) => {
                        return (currentIndex + 1) % CONSISTENCY_STAGES.length;
                    });

                    settleTimeout = window.setTimeout(() => {
                        setIsTransitioning(false);
                        scheduleNextSwap();
                    }, TRANSITION_DURATION_MS);
                }, TRANSITION_DURATION_MS);
            }, HOLD_DURATION_MS);
        };

        scheduleNextSwap();

        return () => {
            if (holdTimeout) {
                window.clearTimeout(holdTimeout);
            }
            if (swapTimeout) {
                window.clearTimeout(swapTimeout);
            }
            if (settleTimeout) {
                window.clearTimeout(settleTimeout);
            }
        };
    }, []);

    const activeStage = CONSISTENCY_STAGES[activeIndex];

    return (
        <div className="relative w-full aspect-[317.33/109.5] overflow-hidden bg-[#090909] rounded-2xl">
            <div
                className={`absolute inset-0 transition-[filter,opacity,transform] ${
                    isTransitioning
                        ? "blur-[15px] opacity-80 scale-[0.992]"
                        : "blur-0 opacity-100 scale-100"
                }`}
                style={{
                    transitionDuration: `${TRANSITION_DURATION_MS}ms`,
                    transitionTimingFunction:
                        "cubic-bezier(0.42, 0, 0.18, 1)",
                    willChange: "filter, opacity, transform",
                }}
            >
                <Image
                    src={activeStage.image}
                    alt={`${activeStage.label} consistency preview`}
                    fill
                    sizes="(max-width: 768px) 80vw, 28vw"
                    className="object-contain"
                />

                <svg
                    viewBox="0 0 317.33 109.5"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                >
                    <text
                        x="16"
                        y="35"
                        fill="white"
                        style={{
                            fontFamily: "var(--font-zodiak), serif",
                            fontSize: "19px",
                            fontWeight: 500,
                        }}
                    >
                        {activeStage.label}
                    </text>
                    <text
                        x="16"
                        y="70"
                        fill="white"
                        style={{
                            fontFamily: "var(--font-zodiak), serif",
                            fontSize: "34px",
                            fontWeight: 500,
                        }}
                    >
                        {activeStage.score}
                    </text>
                    <text
                        x="16"
                        y="84"
                        fill="rgba(255,255,255,0.56)"
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "8.5px",
                            fontWeight: 400,
                            letterSpacing: "0.00em",
                        }}
                    >
                        Consistency Score
                    </text>
                </svg>
            </div>
        </div>
    );
}
