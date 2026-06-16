import { format } from "date-fns";
import ConsistencyScoreCard from "./ConsistencyScoreCard";
import MorphingBlob from "./MorphingBlob";

export default function Preview() {
    const today = new Date();
    const day = format(today, "EEE").toUpperCase();
    const month = format(today, "MMMM");
    const date = format(today, "dd");

    return (
        <section className="w-full px-6 md:px-10 lg:px-24 select-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                <div className="min-w-0 row-start-1 sm:row-start-1 sm:col-start-1 lg:row-start-1 lg:col-start-1">
                    <div className="relative w-full pt-[100%]">
                        <div className="absolute inset-0 rounded-[2rem] bg-[#eeeeee] p-7 md:p-9 flex items-center justify-center overflow-hidden">
                            <ConsistencyScoreCard />
                        </div>
                    </div>
                </div>

                <div className="min-w-0 row-start-3 sm:row-start-2 sm:col-start-2 lg:row-start-1 lg:col-start-2">
                    <div className="relative w-full pt-[100%]">
                        <div className="absolute inset-0 rounded-[2rem] bg-[#eeeeee] p-7 md:p-9 flex items-center justify-center overflow-hidden">
                            <div className="relative h-[72%] w-[72%] max-h-[21rem] max-w-[21rem] bg-[#1D1B1D] rounded-2xl overflow-hidden">
                                <video
                                    src="/images/cal preview.mp4"
                                    aria-label="Calendar preview"
                                    title="Calendar preview"
                                    playsInline
                                    loop
                                    autoPlay
                                    muted
                                    className="h-full w-full rounded-2xl object-cover"
                                />
                                <svg
                                    viewBox="0 0 228.5 228.5"
                                    className="absolute inset-0 h-full w-full pointer-events-none"
                                    aria-hidden="true"
                                >
                                    <foreignObject
                                        x="14"
                                        y="6"
                                        width="92"
                                        height="68"
                                    >
                                        <div
                                            style={{
                                                display: "inline-flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                width: "max-content",
                                                lineHeight: 1,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontFamily:
                                                        "var(--font-inter), sans-serif",
                                                    fontSize: "7px",
                                                    fontWeight:
                                                        day === "SUN"
                                                            ? 500
                                                            : 400,
                                                    letterSpacing: "0.04em",
                                                    color:
                                                        day === "SUN"
                                                            ? "#dc2626"
                                                            : "rgba(255,255,255,0.72)",
                                                }}
                                            >
                                                {day}
                                            </div>
                                            <div
                                                style={{
                                                    marginTop: "-1px",
                                                    fontFamily:
                                                        "var(--font-zodiak), serif",
                                                    fontSize: "24px",
                                                    color: "white",
                                                }}
                                            >
                                                {date}
                                            </div>
                                            <div
                                                style={{
                                                    marginTop: "-1px",
                                                    fontFamily:
                                                        "var(--font-inter), sans-serif",
                                                    fontSize: "9px",
                                                    fontWeight: 400,
                                                    color: "rgba(255,255,255,0.72)",
                                                }}
                                            >
                                                {month}
                                            </div>
                                        </div>
                                    </foreignObject>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="min-w-0 row-start-5 sm:row-start-3 sm:col-start-1 lg:row-start-1 lg:col-start-3">
                    <div className="relative w-full pt-[100%]">
                        <div className="absolute inset-0 rounded-[2rem] bg-[#eeeeee] p-7 md:p-9 flex items-center justify-center overflow-hidden">
                            <MorphingBlob className="w-[clamp(220px,70%,320px)] text-[#111111]" />
                        </div>
                    </div>
                </div>

                <div className="min-w-0 mb-5 sm:mb-0 row-start-2 sm:row-start-1 sm:col-start-2 lg:row-start-2 lg:col-start-1 sm:h-full flex items-center justify-center lg:items-start">
                    <div className="mx-auto max-w-sm px-2 md:max-w-none md:px-1 text-center">
                        <h3 className="font-inter text-lg md:text-xl font-semibold tracking-tight text-black">
                            Consistency Score
                        </h3>
                        <p className="sm:mt-2 font-inter text-sm md:text-[0.95rem] text-black/60 leading-relaxed">
                            An overall measure of how consistent you are with
                            your habits, so progress feels visible at a glance.
                        </p>
                    </div>
                </div>

                <div className="min-w-0 mb-5 sm:mb-0 row-start-4 sm:row-start-2 sm:col-start-1 lg:row-start-2 lg:col-start-2 sm:h-full flex items-center justify-center lg:items-start">
                    <div className="mx-auto max-w-sm px-2 md:max-w-none md:px-1 text-center">
                        <h3 className="font-inter text-lg md:text-xl font-semibold tracking-tight text-black">
                            Calendar Days
                        </h3>
                        <p className="sm:mt-2 font-inter text-sm md:text-[0.95rem] text-black/60 leading-relaxed">
                            Write to calendar, notice patterns and keep a record
                            of what helped and what got in the way.
                        </p>
                    </div>
                </div>

                <div className="min-w-0 mb-5 sm:mb-0 row-start-6 sm:row-start-3 sm:col-start-2 lg:row-start-2 lg:col-start-3 sm:h-full flex items-center justify-center lg:items-start">
                    <div className="mx-auto max-w-sm px-2 md:max-w-none md:px-1 text-center">
                        <h3 className="font-inter text-lg md:text-xl font-semibold tracking-tight text-black">
                            Consistency Blob
                        </h3>
                        <p className="sm:mt-2 font-inter text-sm md:text-[0.95rem] text-black/60 leading-relaxed">
                            An organic shape that grows with your habits,
                            so your consistency feels alive & visible.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
