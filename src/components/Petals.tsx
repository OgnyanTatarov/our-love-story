export function Petals() {
  const petals = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 14 + Math.random() * 12;
        const tx = (Math.random() - 0.5) * 200;
        const size = 10 + Math.random() * 18;
        const hue = Math.random() > 0.5 ? "var(--rose)" : "var(--gold)";
        return (
          <span
            key={i}
            className="absolute block rounded-full opacity-60"
            style={{
              left: `${left}%`,
              bottom: "-40px",
              width: size,
              height: size * 0.7,
              background: `radial-gradient(circle at 30% 30%, ${hue}, transparent 70%)`,
              filter: "blur(0.5px)",
              animation: `drift ${duration}s linear ${delay}s infinite`,
              ["--tx" as string]: `${tx}px`,
            }}
          />
        );
      })}
    </div>
  );
}
