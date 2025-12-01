import React from 'react';
import { 
  Activity, 
  Zap, 
  Moon, 
  Brain, 
  Dumbbell, 
  ShieldCheck, 
  Pill
} from 'lucide-react';

// --- Assets & Icons ---

const GoogleFont = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap');
  `}} />
);

const BicepIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.409 16.712a2.953 2.953 0 1 1-2.036-4.93" />
    <path d="M19.349 13.905a3.81 3.81 0 0 0-4.639-5.118" />
    <path d="M11.666 4.757a3.809 3.809 0 0 0-5.38 3.856" />
    <path d="M7.766 11.234a3.809 3.809 0 0 0 .548 7.574" />
    <path d="M5.536 10.964 2 14.5" />
    <path d="M18.464 9.536 22 6" />
  </svg>
);

const KidneysIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 6c-2.2 0-4 1.8-4 4 0 2 1.5 3.5 3 4.5l1 1 .5 2.5h7l.5-2.5 1-1c1.5-1 3-2.5 3-4.5 0-2.2-1.8-4-4-4-1.5 0-2.5 1-2.5 1S12.5 6 11 6H8z" />
  </svg>
);

const BodyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="5" r="2" />
    <path d="M9 22v-6l-2-3h8l-2 3v6" />
    <path d="M6 10l2-2h8l2 2" />
    <line x1="12" y1="7" x2="12" y2="13" />
  </svg>
);

const OxygenIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="8" y="4" width="8" height="16" rx="3" />
    <path d="M10 4v-2" />
    <path d="M14 4v-2" />
    <path d="M15 9h-6" />
  </svg>
);

// --- Geometry & Constants ---

// Canvas Dimensions
const W = 595;
const H = 842;

// Center of Main Circle
const CX = 297.5;
const CY = 515.16;
const R = 131.73;

// Anchor Points on the Circle Rim (Cardinal Directions)
const ANCHORS = {
  TOP: { x: CX, y: CY - R },       // (297.5, 383.43)
  BOTTOM: { x: CX, y: CY + R },    // (297.5, 646.89)
  LEFT: { x: CX - R, y: CY },      // (165.77, 515.16)
  RIGHT: { x: CX + R, y: CY },     // (429.23, 515.16)
};

// Outer Node Center Positions (Target Coordinates for lines to pass through)
const NODES = {
  GLUCOSE: { x: 356, y: 326 },     // Top Right
  ELECTROLYTE: { x: 125, y: 382 }, // Top Left
  VO2: { x: 511, y: 434 },         // Right
  SLEEP: { x: 528, y: 612 },       // Bottom Right
  INFLAMMATION: { x: 380, y: 729 },// Bottom
  STRESS: { x: 214, y: 729 },      // Bottom Left
  TESTOSTERONE: { x: 50, y: 632 }, // Far Left
  EXPLOSIVE: { x: 68, y: 516 },    // Left
};

// Helper to calculate line extension to canvas edge
// Starts at `start`, goes through `through`, ends at edge.
const calculateLine = (start: {x: number, y: number}, through: {x: number, y: number}) => {
  const dx = through.x - start.x;
  const dy = through.y - start.y;
  
  if (dx === 0 && dy === 0) return { x1: start.x, y1: start.y, x2: start.x, y2: start.y };

  const slope = dy / dx;

  // Potential intersections with 4 edges: x=0, x=W, y=0, y=H
  const intersections = [];

  // 1. Right Edge (x = W)
  if (dx > 0) {
    const yAtRight = start.y + slope * (W - start.x);
    if (yAtRight >= 0 && yAtRight <= H) intersections.push({ x: W, y: yAtRight });
  }

  // 2. Left Edge (x = 0)
  if (dx < 0) {
    const yAtLeft = start.y + slope * (0 - start.x);
    if (yAtLeft >= 0 && yAtLeft <= H) intersections.push({ x: 0, y: yAtLeft });
  }

  // 3. Bottom Edge (y = H)
  if (dy > 0) {
    const xAtBottom = start.x + (H - start.y) / slope;
    if (xAtBottom >= 0 && xAtBottom <= W) intersections.push({ x: xAtBottom, y: H });
  }

  // 4. Top Edge (y = 0)
  if (dy < 0) {
    const xAtTop = start.x + (0 - start.y) / slope;
    if (xAtTop >= 0 && xAtTop <= W) intersections.push({ x: xAtTop, y: 0 });
  }

  // Pick the furthest point that follows the direction
  const end = intersections[0] || through;

  return { x1: start.x, y1: start.y, x2: end.x, y2: end.y };
};

// --- Gradient Line Component ---
const GradientLine = ({ id, start, through }: { id: string, start: {x:number, y:number}, through: {x:number, y:number} }) => {
  const coords = calculateLine(start, through);
  
  return (
    <>
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1={coords.x1} y1={coords.y1} x2={coords.x2} y2={coords.y2}>
          <stop offset="0%" stopColor="#888888" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#888888" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line 
        x1={coords.x1} 
        y1={coords.y1} 
        x2={coords.x2} 
        y2={coords.y2} 
        stroke={`url(#${id})`} 
        strokeWidth="1" 
      />
    </>
  );
};

// --- Main Component ---

export default function OptMap() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4 overflow-auto">
      <GoogleFont />
      
      {/* Scale wrapper */}
      <div className="relative origin-top transform scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 shadow-2xl">
        <div className="w-[595px] h-[842px] bg-[#141414] relative overflow-hidden font-['DM_Sans'] text-white">
          
          {/* --- Background Images --- */}
          <div className="absolute top-[-142.9px] left-[-178.12px] w-[800px] h-[1200px] opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#333_0%,transparent_70%)] mix-blend-multiply" />

          {/* --- Header Section --- */}
          <div className="absolute left-[43.61px] top-[64.17px] w-[461.23px] flex flex-col gap-[16px] z-30">
            <div className="text-[#606060] text-[14.62px] font-light leading-[99%]">
              What progress looks like with the right system
            </div>
            <h1 className="text-white text-[42px] font-normal leading-[96%] my-[6px]">
              Your Personalised <br />Optimisation Map
            </h1>
            <p className="text-white opacity-[0.7] text-[12px] font-normal leading-[121%] w-[327.32px]">
              A Compass for making informed decisions, your optimisation map covers the metrics that matter most to your gym performance & long-term wellbeing
            </p>
          </div>

          {/* --- Logo --- */}
          <div className="absolute left-[514.84px] top-[23.4px] w-[56.72px] h-[28.6px] z-30">
             <div className="w-full h-full relative">
                <div className="absolute inset-0 border border-white rounded-full flex items-center justify-center">
                   <span className="font-bold italic text-sm">F</span>
                </div>
                <div className="absolute left-[7.16px] top-[8.6px] w-[15px] h-[14px] bg-[#EB0000] rounded-full opacity-0" /> 
             </div>
          </div>

          {/* --- Diagram Layer --- */}
          
          {/* Main Central Circle */}
          <div className="absolute left-[165.77px] top-[383.43px] w-[263.46px] h-[263.46px] border-[1.06px] border-[#B76D4A] rounded-full box-border z-10">
             {/* Center Cross Lines */}
             <div className="absolute inset-0">
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#B76D4A]/30 -translate-x-1/2"></div>
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#B76D4A]/30 -translate-y-1/2"></div>
             </div>
          </div>

          {/* --- Connecting Lines (SVG Layer) --- */}
          <svg className="absolute inset-0 pointer-events-none z-[5]" width="595" height="842" viewBox="0 0 595 842">
            
            {/* Horizontal Line (Middle) - Static Faded */}
            <defs>
               <linearGradient id="midLineGrad" x1="0" y1="0" x2="1" y2="0">
                 <stop offset="0%" stopColor="#444" stopOpacity="0" />
                 <stop offset="50%" stopColor="#444" stopOpacity="1" />
                 <stop offset="100%" stopColor="#444" stopOpacity="0" />
               </linearGradient>
            </defs>
            <line x1="0" y1="515.16" x2="595" y2="515.16" stroke="url(#midLineGrad)" strokeWidth="1" />
            
            {/* Dynamic Rays from 4 Anchor Points */}
            
            {/* TOP Anchor Connections */}
            <GradientLine id="grad-glucose" start={ANCHORS.TOP} through={NODES.GLUCOSE} />
            <GradientLine id="grad-electrolyte" start={ANCHORS.TOP} through={NODES.ELECTROLYTE} />
            
            {/* RIGHT Anchor Connections */}
            <GradientLine id="grad-vo2" start={ANCHORS.RIGHT} through={NODES.VO2} />
            <GradientLine id="grad-sleep" start={ANCHORS.RIGHT} through={NODES.SLEEP} />

            {/* BOTTOM Anchor Connections */}
            <GradientLine id="grad-inflammation" start={ANCHORS.BOTTOM} through={NODES.INFLAMMATION} />
            <GradientLine id="grad-stress" start={ANCHORS.BOTTOM} through={NODES.STRESS} />

            {/* LEFT Anchor Connections */}
            <GradientLine id="grad-testosterone" start={ANCHORS.LEFT} through={NODES.TESTOSTERONE} />
            <GradientLine id="grad-explosive" start={ANCHORS.LEFT} through={NODES.EXPLOSIVE} />

          </svg>

          {/* --- The "Four White Points" on the Circle Rim (Anchors) --- */}
          <div className="absolute w-[8px] h-[8px] bg-[#D9D9D9] rounded-full z-15" style={{ left: ANCHORS.TOP.x - 4, top: ANCHORS.TOP.y - 4 }} />
          <div className="absolute w-[8px] h-[8px] bg-[#D9D9D9] rounded-full z-15" style={{ left: ANCHORS.BOTTOM.x - 4, top: ANCHORS.BOTTOM.y - 4 }} />
          <div className="absolute w-[8px] h-[8px] bg-[#D9D9D9] rounded-full z-15" style={{ left: ANCHORS.LEFT.x - 4, top: ANCHORS.LEFT.y - 4 }} />
          <div className="absolute w-[8px] h-[8px] bg-[#D9D9D9] rounded-full z-15" style={{ left: ANCHORS.RIGHT.x - 4, top: ANCHORS.RIGHT.y - 4 }} />


          {/* --- Inner Hub Icons & Text --- */}

          {/* Strength (Top Left Quadrant) */}
          <div className="absolute left-[224.5px] top-[429.29px] w-[36.44px] h-[36.44px] bg-[#B76D4A] rounded-full flex items-center justify-center z-20">
            <Dumbbell size={16} color="white" />
          </div>
          <div className="absolute left-[211.2px] top-[474.66px] w-[63.03px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white">
            Boost<br/>Strength
          </div>

          {/* Recovery (Top Right Quadrant) */}
          <div className="absolute left-[330.93px] top-[429.29px] w-[36.44px] h-[36.44px] bg-[#B76D4A] rounded-full flex items-center justify-center z-20">
            <BicepIcon className="w-4 h-4 text-white" />
          </div>
          <div className="absolute left-[308.09px] top-[474.66px] w-[83.12px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white">
            Accelerate<br/>Recovery
          </div>

          {/* Endurance (Bottom Left Quadrant) */}
          <div className="absolute left-[224.5px] top-[535.99px] w-[36.44px] h-[36.44px] bg-[#B76D4A] rounded-full flex items-center justify-center z-20">
             <Zap size={16} color="white" fill="white" />
          </div>
          <div className="absolute left-[211.2px] top-[581.36px] w-[63.03px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white">
            Enhance<br/>Endurance
          </div>

          {/* Injuries (Bottom Right Quadrant) */}
          <div className="absolute left-[330.53px] top-[535.99px] w-[36.44px] h-[36.44px] bg-[#B76D4A] rounded-full flex items-center justify-center z-20">
            <ShieldCheck size={16} color="white" />
          </div>
          <div className="absolute left-[317.23px] top-[581.36px] w-[63.03px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white">
            Prevent<br/>Injuries
          </div>

          {/* --- Outer Nodes --- */}

          {/* 1. Blood Glucose Control (Top Right) */}
          <div className="absolute left-[333.49px] top-[303.99px] w-[45.67px] h-[45.67px] bg-[#262626] rounded-full flex items-center justify-center z-20">
             <Activity size={24} color="white" />
          </div>
          <div className="absolute left-[387.28px] top-[315.83px] w-[75.83px] text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
            Blood Glucose<br/>Control
          </div>

          {/* 2. Electrolyte Imbalance (Top Left) */}
          <div className="absolute left-[106.14px] top-[363.21px] w-[37.57px] h-[37.57px] bg-[#262626] rounded-full flex items-center justify-center z-20">
            <KidneysIcon className="w-4 h-4 text-white" />
          </div>
          <div className="absolute left-[75.92px] top-[405.52px] w-[98px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
            Electrolyte<br/>Imbalance
          </div>

          {/* 3. Optimum VO2 Max (Right) */}
          <div className="absolute left-[488.94px] top-[410.99px] w-[45px] h-[46px] bg-[#262626] rounded-full flex items-center justify-center z-20">
            <OxygenIcon className="w-5 h-5 text-white" />
          </div>
          <div className="absolute left-[484.75px] top-[461.99px] w-[51px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
            Optimum<br/>VO2 Max
          </div>

          {/* 4. Sleep Hygiene (Bottom Right) */}
          <div className="absolute left-[506.62px] top-[590.97px] w-[43px] h-[43px] bg-[#262626] rounded-full flex items-center justify-center z-20">
            <Moon size={20} color="white" />
          </div>
          <div className="absolute left-[448.26px] top-[600.97px] w-[51px] text-right text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
            Sleep<br/>Hygiene
          </div>

          {/* 5. Inflammation Status (Bottom) */}
          <div className="absolute left-[349.65px] top-[698.41px] w-[61.89px] h-[61.89px] bg-[#262626] rounded-full flex items-center justify-center z-20">
            <BodyIcon className="w-6 h-6 text-white" />
          </div>
          <div className="absolute left-[418.47px] top-[717.93px] w-[66.89px] text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
            Inflammation<br/>Status
          </div>

          {/* 6. Stress Levels (Bottom Left) */}
          <div className="absolute left-[183.94px] top-[698.41px] w-[61.89px] h-[61.89px] bg-[#262626] rounded-full flex items-center justify-center z-20">
            <Brain size={24} color="white" />
          </div>
          <div className="absolute left-[118.41px] top-[718.36px] w-[55.92px] text-right text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
            Stress<br/>Levels
          </div>

          {/* 7. Testosterone Levels (Far Bottom Left) */}
          <div className="absolute left-[32.01px] top-[613.47px] w-[37px] h-[37px] bg-[#262626] rounded-full flex items-center justify-center z-20">
            <Pill size={16} className="rotate-45" color="white" />
          </div>
          <div className="absolute left-[76.23px] top-[620.97px] w-[65.86px] text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
            Testosterone<br/>Levels
          </div>

          {/* 8. Explosive Power Potential (Far Left) */}
          <div className="absolute left-[45.67px] top-[492.33px] w-[45.67px] h-[45.67px] bg-[#262626] rounded-full flex items-center justify-center z-20">
             <BicepIcon className="w-5 h-5 text-white" />
          </div>
          <div className="absolute left-[19.51px] top-[542.15px] w-[98px] text-center text-[10px] leading-[113%] tracking-[0.14px] text-white opacity-[0.9]">
            Explosive Power<br/>Potential
          </div>

        </div>
      </div>
    </div>
  );
}