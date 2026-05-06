import { useEffect, useState } from "react";

const START = new Date("2026-02-06T00:00:00");

function diff() {
  const now = new Date();
  const ms = now.getTime() - START.getTime();
  const s = Math.floor(ms / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  return { days, hours, minutes, seconds };
}

export function CountUp() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  const items = [
    { label: "days", value: t.days },
    { label: "hours", value: t.hours },
    { label: "minutes", value: t.minutes },
    { label: "seconds", value: t.seconds },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
      {items.map((it) => (
        <div key={it.label} className="rounded-2xl bg-card/70 backdrop-blur-sm border border-[color:var(--blush)] px-3 py-5 text-center shadow-[var(--shadow-soft)]">
          <div className="font-display text-3xl md:text-5xl text-[color:var(--rose)] tabular-nums">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
