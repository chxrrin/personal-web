import { useState, useEffect } from "react";

export function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatted = time.toLocaleString("en-US", {
        weekday: "short",
        month:   "short",
        day:     "numeric",
        hour:    "numeric",
        minute:  "2-digit",
        hour12:  true,
    });

    return (
        <div className="header">
            <span className="header-name">cherry.dev</span>
            <span className="header-time">{formatted}</span>
        </div>
    );
}