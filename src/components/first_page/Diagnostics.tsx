import React from "react";

// --- Icons Components ---

const WarningIcon = () => (
  <svg viewBox="0 0 9 11" fill="none" className="w-full h-full text-[#FFF239]">
    <path
      d="M0.9574 2.84787L1.42245 2.38281C1.45886 2.34641 1.45886 2.28651 1.42245 2.25011L0.625051 1.45271C0.607394 1.43522 0.583548 1.42541 0.558699 1.42541C0.533849 1.42541 0.510004 1.43522 0.492347 1.45271L0.0272926 1.91776C0.00980822 1.93542 0 1.95926 0 1.98411C0 2.00896 0.00980822 2.03281 0.0272926 2.05046L0.824696 2.84787C0.861101 2.88427 0.91982 2.88427 0.9574 2.84787ZM8.82104 1.91776L8.35598 1.45271C8.33833 1.43522 8.31448 1.42541 8.28963 1.42541C8.26478 1.42541 8.24094 1.43522 8.22328 1.45271L7.42588 2.25011C7.40839 2.26777 7.39858 2.29161 7.39858 2.31646C7.39858 2.34131 7.40839 2.36516 7.42588 2.38281L7.89093 2.84787C7.92734 2.88427 7.98723 2.88427 8.02363 2.84787L8.82104 2.05046C8.85744 2.01288 8.85744 1.95417 8.82104 1.91776ZM4.09417 1.3153H4.75182C4.80349 1.3153 4.84577 1.27303 4.84577 1.22135V0.0939503C4.84577 0.0422776 4.80349 0 4.75182 0H4.09417C4.04249 0 4.00022 0.0422776 4.00022 0.0939503V1.22135C4.00022 1.27303 4.04249 1.3153 4.09417 1.3153ZM8.181 9.67688H0.66498C0.457115 9.67688 0.289179 9.84481 0.289179 10.0527V10.3345C0.289179 10.3862 0.331457 10.4285 0.383129 10.4285H8.46285C8.51453 10.4285 8.5568 10.3862 8.5568 10.3345V10.0527C8.5568 9.84481 8.38887 9.67688 8.181 9.67688ZM0.676724 8.54947C0.676724 8.75734 0.84466 8.92528 1.05253 8.92528H7.79346C8.00132 8.92528 8.16926 8.75734 8.16926 8.54947V5.81317C8.16926 3.74392 6.49225 2.06691 4.42299 2.06691C2.35374 2.06691 0.676724 3.74392 0.676724 5.81317V8.54947ZM1.52228 5.81317C1.52228 4.21132 2.82114 2.91246 4.42299 2.91246C6.02484 2.91246 7.32371 4.21132 7.32371 5.81317V8.07972H3.15466V6.07154C3.15466 6.00695 3.10182 5.9541 3.03722 5.9541H2.5205C2.45591 5.9541 2.40306 6.00695 2.40306 6.07154V8.07972H1.52228V5.81317Z"
      fill="currentColor"
    />
  </svg>
);

const GutIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <path d="M16 11C16 11 15 13 15 14C15 15.5 16.5 16.5 18 16.5C19.5 16.5 21 15.5 21 14C21 11 17 9 17 9" />
    <path d="M8 11C8 11 9 13 9 14C9 15.5 7.5 16.5 6 16.5C4.5 16.5 3 15.5 3 14C3 11 7 9 7 9" />
    <path d="M12 5V19" />
    <path d="M9 7C9 7 10.5 6 12 6C13.5 6 15 7 15 7" />
    <path d="M9 17C9 17 10.5 18 12 18C13.5 18 15 17 15 17" />
  </svg>
);

const DnaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <path d="M2 15c6.667-6 13.333 0 20-6" />
    <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
    <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    <path d="M17 22c-2.333-3-4-5-4-8" />
    <path d="M7 2c2.333 3 4 5 4 8" />
  </svg>
);

const BowlIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <path d="M4 10h16v2a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8v-2z" />
    <path d="M7 6l1-2" />
    <path d="M12 6l0-3" />
    <path d="M17 6l-1-2" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const BottleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <path d="M8 2h8v4H8z" />
    <path d="M7 6h10v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6z" />
    <path d="M12 11v6" />
    <path d="M9 14h6" />
  </svg>
);

const ArteryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-full h-full"
  >
    <path d="M12 3v18" />
    <path d="M8 7h8" />
    <path d="M8 12h8" />
    <path d="M8 17h8" />
    <path d="M12 3c-4 0-6 3-6 9s2 9 6 9 6-3 6-9-2-9-6-9z" />
  </svg>
);

// --- Card Components ---

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  topRightContent?: React.ReactNode;
}

// Variant 1: The standard folded corner card (Gut, Aging, etc)
const FoldedCard: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div
      className={`w-[280px] h-[280px] md:w-[250px] md:h-[250px] drop-shadow-xl transition-transform hover:scale-105 duration-300 ${className}`}
    >
      {/* SVG Shape Background */}
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M 32 2 H 250 L 318 70 V 288 Q 318 318 288 318 H 32 Q 2 318 2 288 V 32 Q 2 2 32 2 Z"
          fill="#C68A6E"
          stroke="white"
          strokeWidth="1.5"
        />
        <path d="M 250 2 L 318 70 L 270 70 Q 250 70 250 50 Z" fill="white" />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-7 text-white font-dm-sans">
        {/* Icon Circle */}
        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
          <div className="w-8 h-8 text-white">{icon}</div>
        </div>

        <h3 className="font-pangaia font-semibold text-xl tracking-widest mb-2">
          {title}
        </h3>
        <p className="text-white/70 text-xs leading-relaxed">{description}</p>

        {/* Warning Icon Bottom Right */}
        <div className="mt-auto self-end w-5 h-5">
          <WarningIcon />
        </div>
      </div>
    </div>
  );
};

// Variant 2: Rounded Rectangle (Allergy Panels)
const RoundedCard: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className,
  topRightContent,
}) => {
  return (
    <div
      className={`relative w-[280px] h-[280px] md:w-[250px] md:h-[250px] bg-[#C68A6E] rounded-3xl border-[1.5px] border-white drop-shadow-xl transition-transform hover:scale-105 duration-300 flex flex-col p-7 text-white font-dm-sans ${className}`}
    >
      {topRightContent && (
        <div className="absolute top-6 right-6">{topRightContent}</div>
      )}

      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
        <div className="w-8 h-8 text-white">{icon}</div>
      </div>

      <h3 className="font-pangaia font-semibold text-xl tracking-widest mb-2">
        {title}
      </h3>
      <p className="text-white/70 text-xs leading-relaxed">{description}</p>

      <div className="mt-auto self-end w-5 h-5">
        <WarningIcon />
      </div>
    </div>
  );
};

// Variant 3: Sharp Square (Food Intolerance)
const WindowCard: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className,
  topRightContent,
}) => {
  return (
    <div
      className={`relative w-[280px] h-[280px] md:w-[250px] md:h-[250px] bg-[#C68A6E] border-[1.5px] border-white drop-shadow-xl transition-transform hover:scale-105 duration-300 flex flex-col p-7 text-white font-dm-sans ${className}`}
    >
      {topRightContent && (
        <div className="absolute top-4 right-4 text-white/70">
          {topRightContent}
        </div>
      )}

      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
        <div className="w-8 h-8 text-white">{icon}</div>
      </div>

      <h3 className="font-pangaia font-semibold text-xl tracking-widest mb-2">
        {title}
      </h3>
      <p className="text-white/70 text-xs leading-relaxed">{description}</p>

      <div className="mt-auto self-end w-5 h-5">
        <WarningIcon />
      </div>
    </div>
  );
};

// --- Main Page Component ---

const Diagnostics = () => {
  return (
    <div className="diagnostic-bg relative text-white px-7 pt-10 md:pt-12 md:px-12 lg:px-16 pb-20 md:pb-28">
      {/* Top Right Logo Area */}
      <div className="flex justify-end mb-5">
        {/* Fitterity SVG Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9854 0C21.7093 0 27.9707 6.37247 27.9707 14.2334C27.9706 22.0943 21.7093 28.4668 13.9854 28.4668C6.26149 28.4667 8.33349e-05 22.0942 0 14.2334C0 6.37252 6.26144 8.60313e-05 13.9854 0ZM9.95898 14.2441L7.16309 22.0977L7.25977 22.166L12.4648 16.0088H14.584L16.5977 14.2441H9.95898ZM11.6035 8.16602L10.583 10.7939L12.4297 13.0684L13.5898 10.7939H19.376L22.1631 8.16602H11.6035ZM8.72754 8.16602L10.1523 9.87207L10.8906 8.16602H8.72754Z"
            fill="#fff"
          />
        </svg>

        {/* Bird Icon */}
        <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 -1 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              d="M0 0.0508275C0.0223383 0.0158515 0.0274928 -0.0121297 0.0773244 0.00535833C0.158086 0.0350879 0.359131 0.412829 0.429583 0.516008C1.98639 2.71949 5.36635 3.32283 7.8734 3.37529C7.96791 3.37704 8.51777 3.38579 8.5487 3.35081L8.33563 3.05002C7.86137 2.21059 8.49028 1.42363 9.36663 1.37642C9.80137 1.35368 10.1193 1.55654 10.5385 1.43588C10.6296 1.40964 10.7568 1.33794 10.8358 1.32745C10.8891 1.3222 10.8685 1.34844 10.8702 1.38691C10.3461 1.52856 9.94055 1.95352 9.74466 2.45892C9.47317 3.15844 9.76357 3.81774 9.70858 4.54174C9.62782 5.62075 8.858 6.61757 8.08647 7.29785C6.80975 8.42233 5.37666 9.4139 4.08276 10.5244L3.81126 10.7185C4.29239 10.2096 4.84226 9.76016 5.30277 9.23027C5.87498 8.57098 7.23246 6.76622 7.27026 5.91455C7.29776 5.31471 6.7771 5.53156 6.40766 5.5438C3.40745 5.63649 0.957111 3.67084 0.101381 0.804559L0 0.269427V0.052576V0.0508275Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      {/* --- Header Section --- */}
      <div className="mb-14">
        <p className="font-dm-sans font-medium text-[#e4e4e4] text-sm md:text-xl lg:text-2xl">
          Diagnostics that go beyond surface-level analysis
        </p>
        <h1 className="font-dm-sans text-white text-4xl md:text-5xl mt-6 lg:text-6xl tracking-wide">
          Resolute Diagnostics—
          <br className="hidden md:block" />
          for prevention & longevity
        </h1>
        <p className="font-dm-sans md:text-lg lg:text-xl text-white/70 mt-7 leading-relaxed">
          Allergy Panels · Gut Microbiome · Food Intolerance Test · Aging{" "}
          <br className="hidden md:block" /> Clocks · Artery Calcium Screening ·
          Toxicity Screening + Specialized <br className="hidden md:block" />{" "}
          Tests for Performance, Recovery, and Nutrition
        </p>
      </div>

      {/* --- Cards Layout Section --- */}
      <div className="relative w-full max-w-7xl mx-auto h-auto md:h-[800px] flex flex-col items-center gap-6 md:block">
        {/* 1. Gut Microbiome (Top Left) */}
        <FoldedCard
          title="Gut Microbiome"
          description="Low diversity and reduced good bacteria — gut health support needed."
          icon={<GutIcon />}
          className="md:absolute md:top-14 md:left-[10%] lg:left-[20%]"
        />

        {/* 2. Allergy Panels (Top Right) */}
        <RoundedCard
          title="Allergy Panels"
          description="High sensitivity to dust mites and almonds — immune stress flagged."
          icon={<DnaIcon />}
          className="md:absolute md:w-[285px] md:z-10 md:h-[285px] md:top-6 md:left-[50%]"
          topRightContent={
            <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-xs">
              ✕
            </div>
          }
        />

        {/* 3. Food Intolerance (Middle Left/Low) */}
        <WindowCard
          title="Food Intolerance Test"
          description="Elevated reactivity to eggs and wheat — potential inflammation trigger."
          icon={<BowlIcon />}
          className="md:absolute md:w-[300px] z-10 md:h-[280px] md:top-80 md:left-0 lg:left-14"
          topRightContent={
            <div className="flex gap-2 text-lg">
              <span>_</span>
              <span>✕</span>
            </div>
          }
        />

        {/* 4. Aging Clocks (Middle Right) */}
        <FoldedCard
          title="Aging Clocks"
          description="Biological age is 3 years younger than chronological — strong resilience markers."
          icon={<ClockIcon />}
          className="md:absolute md:top-72 md:right-0 lg:right-22"
        />

        {/* 5. Toxicity Screening (Bottom Center) */}
        <FoldedCard
          title="Toxicity Screening"
          description="High BPA and phthalate levels — possible hormone disruption in play."
          icon={<BottleIcon />}
          className="md:absolute md:-bottom-7 md:left-[18%] lg:left-[24%]"
        />

        {/* 6. Artery Calcium (Bottom Right) */}
        <FoldedCard
          title="Artery Calcium Screening"
          description="Calcium score elevated — early arterial plaque detected, risk management advised."
          icon={<ArteryIcon />}
          className="md:absolute md:-bottom-5 md:right-[5%] lg:right-[15%] md:h-[280px]"
        />
      </div>
    </div>
  );
};

export default Diagnostics;
