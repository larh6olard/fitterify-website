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
      <header className="text-white flex justify-between items-center py-5 px-4">
        <div className="flex items-center">
          <img src={birdLogo} alt="Bird Logo" className="w-6 mr-2.5" />
          <h3 className="font-extralight text-lg font-pangaia">
            R<span className="font-pangaia-italic">e</span>solute{" "}
            <span className="opacity-30 mx-1.5">&gt;</span> optiME
          </h3>
        </div>
        <img src={fitterifyLogo} alt="Fitterify Logo" className="w-18" />
      </header>

      <div>
        <h1 className="text-white font-pangaia font-extralight text-4xl text-center px-5 mt-10">
          Your Biology,{" "}
          <span className="font-dm-sans">
            engineered <br /> for the gym floor
          </span>
        </h1>
        <img
          src={injuryImg}
          alt="prevent injury"
          className="w-40 ml-8 mt-15 mb-5"
        />
        <img
          src={accelerateImg}
          alt="accelerate progress"
          className="w-40 mb-3 float-right mr-6"
        />
        <img
          src={boostImg}
          alt="boost strength"
          className="w-40 ml-4 clear-both"
        />
      </div>

      <div className="mt-10">
        <h3 className="font-pangaia text-white text-2xl text-center font-extralight">
          Unlock science led pathways to <br /> strength, stamina & sustained
          results
        </h3>
      </div>

      <div className="flex flex-col space-y-10 items-center md:flex-row md:items-end md:space-y-0 md:justify-between pt-10 pb-10 md:px-10">
        <div className="flex items-center ">
          <a
            href="http://www.theresolute.club"
            target='_blank'
            rel="noopener noreferrer"
            className="bg-white py-2 px-7 rounded-r-xl rounded-l-3xl font-medium text-sm hover:underline hover:text-gray-600 transition-all duration-150"
          >
            theresolute.club
          </a>
          <span className="bg-white w-3 h-2.5"></span>
          <span className="bg-white py-2 px-7 rounded-l-xl rounded-r-3xl font-medium text-sm">
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