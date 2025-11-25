import React from 'react'
import birdLogo from '/src/assets/images/bird-logo.png'
import fitterifyLogo from '/src/assets/images/fitterify-logo.png'
import injuryImg from "/src/assets/images/prevent-injuries.png";
import accelerateImg from "/src/assets/images/accelerate-recovery.png";
import boostImg from "/src/assets/images/boost-strength.png";
import barCode from "/src/assets/images/bar-code.png";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <header className="text-white flex justify-between items-center py-12 px-8">
        <div className="flex items-center">
          <img src={birdLogo} alt="Bird Logo" className="w-6 mr-2.5" />
          <h3 className="font-extralight text-2xl font-pangaia">
            R<span className="font-pangaia-italic">e</span>solute{" "}
            <span className="opacity-30 mx-2">&gt;</span> optiME
          </h3>
        </div>
        <img src={fitterifyLogo} alt="Fitterify Logo" className="w-18" />
      </header>

      <div>
        <h1 className="text-white font-pangaia font-extralight text-5xl text-center px-12 py-8">
          Your Biology, engineered for the gym floor
        </h1>
        <img
          src={injuryImg}
          alt="prevent injury"
          className="w-40 py-10 ml-30"
        />
        <img
          src={accelerateImg}
          alt="accelerate progress"
          className="w-40 pb-10 float-right mr-20"
        />
        <img
          src={boostImg}
          alt="boost strength"
          className="w-40 ml-20 clear-both"
        />
      </div>

      <div>
        <h3 className="font-pangaia text-white text-2xl text-center font-extralight mt-20">
          Unlock science led pathways to <br /> strength, stamina & sustained
          results
        </h3>
      </div>

      <div className="flex items-end justify-between pt-10 pb-15 px-10">
        <div className="flex items-center">
          <address className="bg-white py-1 px-7 rounded-xl font-medium">
            theresolute.club
          </address>
          <span className="bg-white w-3 h-2.5"></span>
          <span className="bg-white py-1 px-7 rounded-xl font-medium">
            +91 6360265906
          </span>
        </div>

        <img
          src={barCode}
          alt="Bar Code"
          className="w-24 border border-white rounded-sm"
        />
      </div>
    </div>
  );
}

export default HeroSection