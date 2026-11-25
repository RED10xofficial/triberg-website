import Image from "next/image";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#071a24] text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/bg.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      {/* Black → transparent overlay, bottom to top */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/15 via-40% to-transparent"
      />

      {/* Header — logo centred */}
      <header className="flex justify-center px-6 pt-10 md:pt-[38px]">
        <Image
          src="/triberg-logo.png"
          alt="Triberg"
          width={109}
          height={109}
          priority
          className="h-auto w-[84px] md:w-[109px]"
        />
      </header>

      {/* Hero copy */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
        <h1
          className="animate-fade-up max-w-[907px] font-display text-[44px] leading-[1] tracking-[-0.03em] sm:text-[64px] lg:text-[96px]"
          style={{ animationDelay: "150ms" }}
        >
          pure, by nature.
          <br />
          refined by triberg.
        </h1>

        <div
          className="animate-fade-up mt-12 flex flex-col items-center gap-6"
          style={{ animationDelay: "450ms" }}
        >
          <p className="max-w-[687px] text-base font-light leading-[25px] text-white/85 md:text-[18px]">
            Our website is currently under maintenance.
            <br />
            We&apos;re refining a few things and will be back shortly.
          </p>

          <span className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-6 py-3 font-display text-[12px] uppercase tracking-[0.1em] backdrop-blur-sm">
            <span
              aria-hidden
              className="animate-pulse-dot size-2 rounded-full bg-white"
            />
            Under maintenance
          </span>
        </div>
      </section>
    </main>
  );
}
