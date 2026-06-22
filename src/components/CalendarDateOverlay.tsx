"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

type CalendarDate = {
    day: string;
    date: string;
    month: string;
};

function getCalendarDate(): CalendarDate {
    const today = new Date();

    return {
        day: format(today, "EEE").toUpperCase(),
        date: format(today, "dd"),
        month: format(today, "MMMM"),
    };
}

export default function CalendarDateOverlay() {
    const [calendarDate, setCalendarDate] = useState<CalendarDate | null>(
        null,
    );

    useEffect(() => {
        const updateDate = () => setCalendarDate(getCalendarDate());

        updateDate();
        const intervalId = window.setInterval(updateDate, 60 * 1000);

        return () => window.clearInterval(intervalId);
    }, []);

    const day = calendarDate?.day ?? "";
    const date = calendarDate?.date ?? "";
    const month = calendarDate?.month ?? "";
    const isSunday = day === "SUN";

    return (
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
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "7px",
                    fontWeight: isSunday ? 500 : 400,
                    letterSpacing: "0.04em",
                    color: isSunday ? "#dc2626" : "rgba(255,255,255,0.72)",
                }}
            >
                {day}
            </div>
            <div
                style={{
                    marginTop: "-1px",
                    fontFamily: "var(--font-zodiak), serif",
                    fontSize: "24px",
                    color: "white",
                }}
            >
                {date}
            </div>
            <div
                style={{
                    marginTop: "-1px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "9px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.72)",
                }}
            >
                {month}
            </div>
        </div>
    );
}
