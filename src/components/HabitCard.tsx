import Image from "next/image";

export default function HabitCard() {
    return (
        <div className="relative w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 p-6 md:p-10 lg:p-24 bg-black w-full">
                <div className="relative col-span-1 aspect-square bg-[#111111] rounded-2xl flex items-center justify-center">
                    <Card />
                </div>
                <div className="lg:col-span-2 flex flex-col items-center justify-center">
                    <h3 className="font-inter  text-lg md:text-xl font-semibold tracking-tight text-white text-center">
                        <span className="text-xs uppercase">Upcoming</span>
                        <br />
                        Beautiful Habit cards <br />
                    </h3>
                    <p className="mt-2 font-inter text-sm md:text-[0.95rem] max-w-xl text-white/60 leading-relaxed text-center">
                        Freaks is something we genuinely care about and
                        we&apos;ll keep improving it for years to come. <br />
                    </p>
                </div>
            </div>
            <Image
                className="pointer-events-none absolute right-0 top-0 hidden h-[80%] w-auto object-contain opacity-25 mix-blend-screen lg:block"
                src="/images/clouds.png"
                alt="habit card"
                width={500}
                height={500}
                sizes="(max-width: 1023px) 0px, 500px"
                priority
            />
        </div>
    );
}

function Card() {
    return (
        <div className="relative w-[84%] max-w-[24rem] aspect-[800/200] rounded-[1.5rem] overflow-hidden bg-black ">
            <Image
                className="h-auto object-contain"
                src="/images/habit.png"
                alt="habit card"
                fill
                sizes="(max-width: 840px) 100vw, 800px"
                priority
            />
            <svg
                viewBox="0 0 800 200"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
            >
                <text
                    x="52"
                    y="90"
                    fill="white"
                    style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "36px",
                        fontWeight: 500,
                    }}
                >
                    Rectitude
                </text>
                <text
                    x="52"
                    y="130"
                    fill="rgba(255,255,255,0.72)"
                    style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "20px",
                        fontWeight: 500,
                    }}
                >
                    0 / 1 times
                </text>
                <text
                    x="730"
                    y="125"
                    fill="white"
                    textAnchor="end"
                    style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "76px",
                        fontWeight: 800,
                    }}
                >
                    9
                </text>
            </svg>
        </div>
    );
}
