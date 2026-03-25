import { useEffect, useRef } from "react";

const CONFETTI_COLORS = [
  "#B9FF4A",
  "#FF5FA2",
  "#FFB24A",
  "#BFF3FF",
  "#FFE36E",
  "#B9FF7A",
  "#7A4CFF",
  "#FF9A3D",
  "#FFC857",
];

const CONFETTI_COUNT = 30;

const confettiPieces = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
  id: i,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  left: `${(i * 3.5) % 100}%`,
  width: `${6 + (i % 4) * 3}px`,
  height: `${6 + (i % 3) * 4}px`,
  animDuration: `${4 + (i % 6)}s`,
  animDelay: `${(i * 0.4) % 5}s`,
  borderRadius: i % 3 === 0 ? "50%" : "2px",
}));

const bokehDots = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  top: `${(i * 7) % 90}%`,
  left: `${(i * 13) % 95}%`,
  size: `${8 + (i % 5) * 6}px`,
  opacity: 0.15 + (i % 4) * 0.05,
  animDuration: `${3 + (i % 4)}s`,
  animDelay: `${(i * 0.7) % 4}s`,
}));

export default function BirthdayPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Happy Birthday Monster! 🎉";
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ backgroundColor: "#0B0F16" }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Bokeh dots */}
      {bokehDots.map((dot) => (
        <div
          key={dot.id}
          className="bokeh-dot"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            animationDuration: dot.animDuration,
            animationDelay: dot.animDelay,
            filter: "blur(4px)",
          }}
        />
      ))}

      {/* Confetti */}
      {confettiPieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            backgroundColor: p.color,
            animationDuration: p.animDuration,
            animationDelay: p.animDelay,
            borderRadius: p.borderRadius,
          }}
        />
      ))}

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="vignette relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
        data-ocid="hero.section"
      >
        {/* Balloon Left */}
        <div
          className="balloon absolute left-2 md:left-8 top-16 flex flex-col items-center select-none pointer-events-none"
          style={{ animationDuration: "4s" }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              filter: "drop-shadow(0 0 12px #FF5FA2)",
            }}
          >
            🎈
          </span>
          <div
            style={{
              width: "2px",
              height: "60px",
              background: "linear-gradient(#FF5FA2, transparent)",
            }}
          />
        </div>
        <div
          className="balloon absolute left-10 md:left-24 bottom-24 flex flex-col items-center select-none pointer-events-none"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              filter: "drop-shadow(0 0 12px #B9FF4A)",
            }}
          >
            🎈
          </span>
          <div
            style={{
              width: "2px",
              height: "40px",
              background: "linear-gradient(#B9FF4A, transparent)",
            }}
          />
        </div>

        {/* Balloon Right */}
        <div
          className="balloon absolute right-2 md:right-8 top-20 flex flex-col items-center select-none pointer-events-none"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              filter: "drop-shadow(0 0 12px #FFB24A)",
            }}
          >
            🎈
          </span>
          <div
            style={{
              width: "2px",
              height: "60px",
              background: "linear-gradient(#FFB24A, transparent)",
            }}
          />
        </div>
        <div
          className="balloon absolute right-10 md:right-24 bottom-28 flex flex-col items-center select-none pointer-events-none"
          style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              filter: "drop-shadow(0 0 12px #BFF3FF)",
            }}
          >
            🎈
          </span>
          <div
            style={{
              width: "2px",
              height: "40px",
              background: "linear-gradient(#BFF3FF, transparent)",
            }}
          />
        </div>

        {/* Hero headline */}
        <div className="relative z-10 text-center">
          <h1
            className="font-extrabold uppercase tracking-tight leading-none mb-2"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(3.5rem, 16vw, 10rem)",
            }}
          >
            <span className="block glow-cyan">HAPPY</span>
            <span className="block glow-yellow">BIRTHDAY</span>
            <span className="block glow-green">MONSTER!</span>
          </h1>

          <p
            className="mt-6 mb-10 mx-auto max-w-md text-lg md:text-xl"
            style={{ color: "#C9CED6", fontFamily: "'Figtree', sans-serif" }}
          >
            Wishing you the most epic, legendary, and absolutely insane day
            ever! 🎉🎊
          </p>

          <button
            type="button"
            className="btn-celebrate"
            data-ocid="hero.primary_button"
            onClick={() => {
              document
                .getElementById("message-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            🎉 Let's Celebrate!
          </button>
        </div>
      </section>

      {/* BIRTHDAY MESSAGE SECTION */}
      <section
        id="message-section"
        className="relative z-10 py-20 px-6"
        style={{
          background: "linear-gradient(180deg, #0B0F16 0%, #101520 100%)",
        }}
        data-ocid="message.section"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-center font-bold mb-10"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: "#B9FF4A",
              textShadow: "0 0 20px #B9FF4A60",
            }}
          >
            ✨ Special Message for Monster ✨
          </h2>

          <div
            className="card-glow rounded-2xl p-8 md:p-12"
            style={{
              background: "#0F1420",
              border: "1.5px solid #7CFF6B",
            }}
          >
            <p
              className="leading-relaxed text-lg md:text-xl"
              style={{ color: "#E8EDFB", fontFamily: "'Figtree', sans-serif" }}
            >
              Hey <strong style={{ color: "#B9FF4A" }}>Monster!</strong> 🎂
            </p>
            <br />
            <p
              className="leading-relaxed text-lg md:text-xl"
              style={{ color: "#C9CED6", fontFamily: "'Figtree', sans-serif" }}
            >
              Today is <strong style={{ color: "#FFE36E" }}>YOUR</strong> day.
              You deserve all the cake, all the laughs, and every single good
              vibe the universe has to offer.
            </p>
            <br />
            <p
              className="leading-relaxed text-lg md:text-xl"
              style={{ color: "#C9CED6", fontFamily: "'Figtree', sans-serif" }}
            >
              Here's to another year of being{" "}
              <strong style={{ color: "#FF5FA2" }}>absolutely iconic</strong>,
              living on your own terms, and keeping everyone around you
              entertained. You make every room more fun just by being in it. 💫
            </p>
            <br />
            <p
              className="text-2xl font-bold"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                color: "#B9FF7A",
                textShadow: "0 0 15px #B9FF7A80",
              }}
            >
              Happy Birthday, Monster! 🎈🎂🎊
            </p>
          </div>
        </div>
      </section>

      {/* BABYBOY SECTION */}
      <section
        className="relative z-10 py-20 px-6"
        style={{ background: "#0D111A" }}
        data-ocid="babyboy.section"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-center font-bold mb-10"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: "#BFF3FF",
              textShadow: "0 0 20px #7A4CFF60",
            }}
          >
            You are just MY BABYBOY 🤏🏻
          </h2>

          <div
            className="card-glow rounded-2xl p-8 md:p-10 text-center"
            style={{
              background: "#0F1420",
              border: "1.5px solid #7CFF6B",
            }}
          >
            <p
              className="leading-relaxed text-lg md:text-xl"
              style={{ color: "#C9CED6", fontFamily: "'Figtree', sans-serif" }}
            >
              Here's to another year of you pretending you're full… but secretly
              waiting for me to cook again 😏🍴❤️
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative z-10 py-10 px-6 text-center"
        style={{
          background: "#080B10",
          borderTop: "1px solid #1C2535",
        }}
        data-ocid="footer.section"
      >
        <p
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            color: "#B9FF4A",
            textShadow: "0 0 15px #B9FF4A60",
          }}
        >
          Happy Birthday Monster! 🎉
        </p>
        <p style={{ color: "#4A5568", fontSize: "0.85rem" }}>
          With love &amp; good vibes — {new Date().getFullYear()} 🎈
        </p>
        <p className="mt-4" style={{ color: "#2D3748", fontSize: "0.75rem" }}>
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4A5568", textDecoration: "underline" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
