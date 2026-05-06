import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import photo1 from "@/assets/1FCBBFC7-5321-4D49-A172-094936175068.JPG";
import photo2 from "@/assets/25A28196-00CB-49E9-96A9-2531338C6A37.JPG";
import photo3 from "@/assets/5E10986C-0364-48A8-B3EB-0BB7A291EECB.JPG";
import photo4 from "@/assets/8C7BE539-6218-4B4D-858C-2E0C9E8974C1.JPG";
import { Petals } from "@/components/Petals";
import { CountUp } from "@/components/CountUp";

export const Route = createFileRoute("/")({
  component: Index,
});

const reasons = [
  "Твоята усмивка прави всеки ден по-светъл.",
  "Начинът, по който се смееш на собствените си шеги.",
  "Колко уютно е просто да мълчим заедно.",
  "Прегръдките ти, които спират времето.",
  "Очите ти — мога да се изгубя в тях завинаги.",
  "Това как ме караш да се чувствам у дома.",
];

const timeline = [
  { date: "06.02.2026", title: "Първия ден", text: "Денят, в който всичко започна." },
  { date: "Февруари", title: "Първата ни среща", text: "Кафе, нерви и една усмивка, която още нося." },
  { date: "Март", title: "Първото 'обичам те'", text: "Тихо, искрено и съвсем наше." },
  { date: "Април", title: "Три месеца", text: "И едва започваме." },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Petals />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="relative z-10 text-center max-w-3xl animate-fade-up">
          <p className="font-script text-3xl md:text-5xl text-[color:var(--rose)] mb-4">за моята Симона</p>
          <h1 className="font-display text-6xl md:text-9xl leading-[0.95] text-foreground">
            Три<br />
            <em className="text-[color:var(--rose)]">прекрасни</em>
            <br />
            месеца
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground italic max-w-xl mx-auto">
            …и цял живот моменти, които никога не искам да забравя. Честита годишнина, любов моя.
          </p>
          <div className="mt-12">
            <CountUp />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">от 06 · 02 · 2026</p>
          </div>
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-script text-3xl text-[color:var(--rose)] mb-2">писмо</p>
          <h2 className="font-display text-5xl md:text-7xl mb-12">От Огнян, с любов</h2>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="relative rounded-3xl bg-card/80 backdrop-blur-sm border border-[color:var(--blush)] p-10 md:p-16 shadow-[var(--shadow-soft)]">
            <Heart className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 text-[color:var(--rose)] fill-[color:var(--rose)] animate-pulse-heart" />
            <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-foreground/90">
              Моя Симона,
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Три месеца. Толкова кратко на хартия и толкова безкрайно в сърцето ми.
              Не знаех, че може да се чувствам така — спокоен, щастлив, у дома —
              докато не те срещнах.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              Благодаря ти за всяка усмивка, за всяко 'добро утро', за всяка тишина,
              която споделяме. Ти си най-красивото нещо, което ми се е случвало.
            </p>
            <p className="mt-6 font-script text-3xl text-[color:var(--rose)] text-right">— твоя Огнян</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-script text-3xl text-[color:var(--rose)] mb-2">моменти</p>
            <h2 className="font-display text-5xl md:text-7xl">Нашата малка галерия</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="md:row-span-2 overflow-hidden rounded-3xl shadow-[var(--shadow-petal)] group">
              <img src={photo1} alt="Симона и Огнян" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-petal)] group">
              <img src={photo2} alt="Симона и Огнян" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-petal)] group">
              <img src={photo3} alt="Симона и Огнян" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-3xl shadow-[var(--shadow-petal)] group">
              <img src={photo4} alt="Симона и Огнян" loading="lazy" width={1024} height={1280} className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-script text-3xl text-[color:var(--rose)] mb-2">нашата история</p>
            <h2 className="font-display text-5xl md:text-7xl">Малка времева линия</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--rose)] to-transparent" />
            {timeline.map((m, i) => (
              <div key={i} className={`relative mb-16 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"} pl-12 md:pl-12`}>
                <div className={`absolute top-3 ${i % 2 === 0 ? "md:-right-2 left-2 md:left-auto" : "md:-left-2 left-2"} w-4 h-4 rounded-full bg-[color:var(--rose)] ring-4 ring-background animate-shimmer`} />
                <div className="rounded-2xl bg-card/70 backdrop-blur-sm border border-[color:var(--blush)] p-6 shadow-[var(--shadow-soft)]">
                  <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose)]">{m.date}</div>
                  <h3 className="font-display text-3xl mt-2">{m.title}</h3>
                  <p className="mt-2 text-foreground/75">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-script text-3xl text-[color:var(--rose)] mb-2">завинаги и още един ден</p>
            <h2 className="font-display text-5xl md:text-7xl">Защо те обичам</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="group relative rounded-2xl bg-card/60 backdrop-blur-sm border border-[color:var(--blush)] p-8 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-start gap-4">
                  <span className="font-display text-5xl text-[color:var(--gold)] leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-display italic text-xl md:text-2xl leading-snug text-foreground/85">{r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SONG / VIDEO */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-script text-3xl text-[color:var(--rose)] mb-2">нашата песен</p>
          <h2 className="font-display text-5xl md:text-7xl mb-10">Пусни, любов моя</h2>
          <div className="relative rounded-3xl overflow-hidden border border-[color:var(--blush)] shadow-[var(--shadow-petal)] aspect-video bg-card/80 flex items-center justify-center">
            {/* Replace src with your generated video file */}
            <video
              controls
              poster={photo4}
              className="w-full h-full object-cover"
            >
              <source src="/our-song.mp4" type="video/mp4" />
              Браузърът ти не поддържа видео.
            </video>
          </div>
          <p className="mt-6 text-sm italic text-muted-foreground">
            (качено като <code className="font-mono">our-song.mp4</code>)
          </p>
        </div>
      </section>

      {/* OUTRO */}
      <section className="relative py-40 px-6 text-center">
        <Heart className="mx-auto w-12 h-12 text-[color:var(--rose)] fill-[color:var(--rose)] animate-pulse-heart" />
        <p className="mt-6 font-script text-5xl md:text-7xl text-[color:var(--rose)]">
          обичам те
        </p>
        <p className="mt-4 text-muted-foreground tracking-[0.3em] text-xs uppercase">
          Simona &nbsp;·&nbsp; Ognyan
        </p>
      </section>
    </div>
  );
}
