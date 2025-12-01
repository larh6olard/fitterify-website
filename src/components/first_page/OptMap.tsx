import React from 'react'
import {
  Activity,
  Zap,
  Moon,
  Brain,
  Dumbbell,
  ShieldCheck,
  Pill,
} from "lucide-react";

const BicepIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12.409 16.712a2.953 2.953 0 1 1-2.036-4.93" />
    <path d="M19.349 13.905a3.81 3.81 0 0 0-4.639-5.118" />
    <path d="M11.666 4.757a3.809 3.809 0 0 0-5.38 3.856" />
    <path d="M7.766 11.234a3.809 3.809 0 0 0 .548 7.574" />
    <path d="M5.536 10.964 2 14.5" />
    <path d="M18.464 9.536 22 6" />
  </svg>
);

const KidneysIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 6c-2.2 0-4 1.8-4 4 0 2 1.5 3.5 3 4.5l1 1 .5 2.5h7l.5-2.5 1-1c1.5-1 3-2.5 3-4.5 0-2.2-1.8-4-4-4-1.5 0-2.5 1-2.5 1S12.5 6 11 6H8z" />
  </svg>
);

const BodyIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="5" r="2" />
    <path d="M9 22v-6l-2-3h8l-2 3v6" />
    <path d="M6 10l2-2h8l2 2" />
    <line x1="12" y1="7" x2="12" y2="13" />
  </svg>
);

const OxygenIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="8" y="4" width="8" height="16" rx="3" />
    <path d="M10 4v-2" />
    <path d="M14 4v-2" />
    <path d="M15 9h-6" />
  </svg>
);


const OptMap: React.FC = () => {
  return (
    <div className="optmap-bg w-full px-7 pt-10 md:pt-12 md:px-12 lg:px-16 h-[1500px] md:pb-20">
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

      {/* Header Section */}
      <div className="mb-40 mt-5">
        <p className="font-dm-sans font-medium text-gray-500 text-sm md:text-xl lg:text-2xl">
          What progress looks like with the right system
        </p>
        <h1 className="font-dm-sans text-white text-4xl md:text-5xl mt-6 lg:text-6xl tracking-wide leading">
          Your Personalised Optimisation Map
        </h1>
        <p className="font-dm-sans text-md md:text-lg lg:text-xl text-white/70 mt-7">
          A Compass for making informed decisions, your{" "}
          <br className="hidden md:block" /> optimisation map covers the metrics
          that matter most to <br className="hidden md:block" /> your gym
          performance & long-term wellbeing
        </p>
      </div>

      {/* Main Central Circle */}
      <div className="w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] border border-[#B76D4A] rounded-[50%] mx-auto relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white -translate-x-1/2"></div>
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white -translate-y-1/2"></div>
        </div>
        {/* --- The "Four White Points" on the Circle Rim (Anchors) --- */}
        {/* Top */}
        <div className="absolute size-2 bg-white rounded-full left-[139.5px] -top-1 md:left-48 lg:left-66.5"></div>
        {/* Bottom */}
        <div className="absolute size-2 bg-white rounded-full left-[139.9px] -bottom-1 md:left-48 lg:left-66.5"></div>
        {/* Left */}
        <div className="absolute size-2 bg-white rounded-full bottom-[139.5px] -left-1 md:bottom-48 lg:bottom-66.5"></div>
        {/* Right */}
        <div className="absolute size-2 bg-white rounded-full bottom-[139.5px] -right-1 md:bottom-48 lg:bottom-66.5"></div>

        {/* Strength (Top Left Quadrant) */}
        <div className="absolute left-15 top-13 md:left-20 md:top-17 w-11 h-11 md:w-14 md:h-14 bg-[#B76D4A] rounded-full flex items-center justify-center z-10">
          <Dumbbell size={18} color="white" />
        </div>
        <div className="absolute left-15.5 top-25 md:left-19 md:top-32 text-center text-[10px] leading-[113%] tracking-[0.14px] text-white md:text-base">
          Boost
          <br />
          Strength
        </div>

        {/* Recovery (Top Right Quadrant) */}
        <div className="absolute right-15 top-13 w-11 h-11 bg-[#B76D4A] rounded-full flex items-center justify-center z-10">
          <BicepIcon className="w-4 h-4 text-white" />
        </div>
        <div className="absolute right-14.5 top-25 text-center text-[10px] leading-[113%] tracking-[0.14px] text-white">
          Accelerate
          <br />
          Recovery
        </div>

        {/* Endurance (Bottom Left Quadrant) */}
        <div className="absolute left-15 top-43 w-11 h-11 bg-[#B76D4A] rounded-full flex items-center justify-center z-10">
          <Zap size={16} color="white" fill="white" />
        </div>
        <div className="absolute left-14.5 top-55 text-center text-[10px] leading-[113%] tracking-[0.14px] text-white">
          Enhance
          <br />
          Endurance
        </div>

        {/* Injuries (Bottom Right Quadrant) */}
        <div className="absolute right-15 bottom-[71px] w-11 h-11 bg-[#B76D4A] rounded-full flex items-center justify-center z-10">
          <ShieldCheck size={16} color="white" />
        </div>
        <div className="absolute right-16.5 bottom-11 text-center text-[10px] leading-[113%] tracking-[0.14px] text-white">
          Prevent
          <br />
          Injuries
        </div>

        {/* --- Outer Nodes --- */}

        {/* 1. Blood Glucose Control (Top Right) */}
        <div className="absolute left-[333.49px] top-[303.99px] w-[45.67px] h-[45.67px] bg-[#262626] rounded-full flex items-center justify-center z-20">
          <Activity size={24} color="white" />
        </div>
        <div className="absolute left-[387.28px] top-[315.83px] w-[75.83px] text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
          Blood Glucose
          <br />
          Control
        </div>

        {/* 2. Electrolyte Imbalance (Top Left) */}
        <div className="absolute left-[106.14px] top-[363.21px] w-[37.57px] h-[37.57px] bg-[#262626] rounded-full flex items-center justify-center z-20">
          <KidneysIcon className="w-4 h-4 text-white" />
        </div>
        <div className="absolute left-[75.92px] top-[405.52px] w-[98px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
          Electrolyte
          <br />
          Imbalance
        </div>

        {/* 3. Optimum VO2 Max (Right) */}
        <div className="absolute left-[488.94px] top-[410.99px] w-[45px] h-[46px] bg-[#262626] rounded-full flex items-center justify-center z-20">
          <OxygenIcon className="w-5 h-5 text-white" />
        </div>
        <div className="absolute left-[484.75px] top-[461.99px] w-[51px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
          Optimum
          <br />
          VO2 Max
        </div>

        {/* 4. Sleep Hygiene (Bottom Right) */}
        <div className="absolute left-[506.62px] top-[590.97px] w-[43px] h-[43px] bg-[#262626] rounded-full flex items-center justify-center z-20">
          <Moon size={20} color="white" />
        </div>
        <div className="absolute left-[448.26px] top-[600.97px] w-[51px] text-right text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
          Sleep
          <br />
          Hygiene
        </div>

        {/* 5. Inflammation Status (Bottom) */}
        <div className="absolute left-[349.65px] top-[698.41px] w-[61.89px] h-[61.89px] bg-[#262626] rounded-full flex items-center justify-center z-20">
          <BodyIcon className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-[418.47px] top-[717.93px] w-[66.89px] text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
          Inflammation
          <br />
          Status
        </div>

        {/* 6. Stress Levels (Bottom Left) */}
        <div className="absolute left-[183.94px] top-[698.41px] w-[61.89px] h-[61.89px] bg-[#262626] rounded-full flex items-center justify-center z-20">
          <Brain size={24} color="white" />
        </div>
        <div className="absolute left-[118.41px] top-[718.36px] w-[55.92px] text-right text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
          Stress
          <br />
          Levels
        </div>

        {/* 7. Testosterone Levels (Far Bottom Left) */}
        <div className="absolute left-[32.01px] top-[613.47px] w-[37px] h-[37px] bg-[#262626] rounded-full flex items-center justify-center z-20">
          <Pill size={16} className="rotate-45" color="white" />
        </div>
        <div className="absolute left-[76.23px] top-[620.97px] w-[65.86px] text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
          Testosterone
          <br />
          Levels
        </div>

        {/* 8. Explosive Power Potential (Far Left) */}
        <div className="absolute left-[45.67px] top-[492.33px] w-[45.67px] h-[45.67px] bg-[#262626] rounded-full flex items-center justify-center z-20">
          <BicepIcon className="w-5 h-5 text-white" />
        </div>
        <div className="absolute left-[19.51px] top-[542.15px] w-[98px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
          Explosive Power
          <br />
          Potential
        </div>
      </div>
    </div>
  );
}

export default OptMap