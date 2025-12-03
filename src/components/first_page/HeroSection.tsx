import React from 'react'
import birdLogo from "/src/assets/images/hero-component/bird-logo.png";
import fitterifyLogo from '/src/assets/images/hero-component/fitterify-logo.png'
import injuryImg from "/src/assets/images/hero-component/prevent-injuries.png";
import accelerateImg from "/src/assets/images/hero-component/accelerate-recovery.png";
import boostImg from "/src/assets/images/hero-component/boost-strength.png";
import barCode from "/src/assets/images/hero-component/bar-code.png";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <header className="text-white flex justify-between items-center py-5 px-4 md:py-10 md:px-11">
        <div className="flex items-center">
          <img
            src={birdLogo}
            alt="Bird Logo"
            className="w-6 mr-2.5 md:w-10 lg:w-12"
          />
          <h3 className="font-extralight text-lg font-pangaia md:text-2xl lg:text-3xl">
            R<span className="font-pangaia-italic">e</span>solute{" "}
            <span className="opacity-30 mx-1.5">&gt;</span> optiME
          </h3>
        </div>
        <img
          src={fitterifyLogo}
          alt="Fitterify Logo"
          className="w-18 md:w-24 lg:w-30"
        />
      </header>

      <div>
        <h1 className="text-white font-pangaia font-extralight text-4xl text-center px-5 mt-10 md:text-6xl lg:text-7xl">
          Your Biology,{" "}
          <span className="font-dm-sans">
            engineered <br /> for the gym floor
          </span>
        </h1>
        {/* Mobile view */}
        <div className="md:hidden mx-3">
          <img
            src={injuryImg}
            alt="prevent injury"
            className="w-40 ml-8 mt-15 mb-5"
          />
          <img
            src={accelerateImg}
            alt="accelerate progress"
            className="w-40 mb-6 float-right mr-6"
          />
          <img
            src={boostImg}
            alt="boost strength"
            className="clear-both w-40 ml-4"
          />
        </div>

        {/* Middle and Large Screen View  */}
        <div className="text-white md:flex md:justify-evenly md:items-center hidden md:mt-20">
          {/* Prevent Injuries container */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
            >
              <circle
                cx="19.63"
                cy="20.109"
                r="19"
                fill="#fff"
                fill-opacity=".15"
                stroke="#fff"
              />
              <g fill="#fff" clip-path="url(#a)">
                <path d="M25.751 13.988a3 3 0 0 0-4.242 0l-1.146 1.147 4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242Zm-1.828 6.121-4.266-4.266-4.289 4.297 4.262 4.262 4.293-4.293Zm-5.006 4.994-4.257-4.257-1.15 1.143a3 3 0 0 0 4.24 4.24l.006-.006 1.16-1.12h.001Zm-4.608-5.318 6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.53-5.006 5.005-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z" />
                <path d="M17.19 19.755a.5.5 0 1 1-.814.546.5.5 0 0 1 .814-.546Zm1.415-1.414a.501.501 0 0 1-.351.86.5.5 0 1 1 .351-.86Zm1.415-1.414a.5.5 0 0 1-.708.707.5.5 0 0 1 .707-.707h.001Zm0 5.657a.5.5 0 0 1-.708.707.5.5 0 0 1 .707-.707h.001Zm1.413-1.415a.5.5 0 0 1-.707.708.5.5 0 0 1 .707-.708Zm1.414-1.414a.5.5 0 1 1-.814.546.5.5 0 0 1 .815-.546Zm-4.242 1.414a.501.501 0 0 1-.707.708.5.5 0 0 1 .707-.708Zm1.415-1.414Zm1.413-1.414a.501.501 0 0 1-.351.86.5.5 0 1 1 .351-.86Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M11.63 12.11h16v16h-16z" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[12px] mt-3 text-gray-200 text-center lg:text-base leading-4">
              Prevent <br /> Injuries
            </span>
          </div>
          {/* Accelerate Recovery container */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
            >
              <circle
                cx="20.081"
                cy="20.36"
                r="19"
                fill="#fff"
                fill-opacity=".15"
                stroke="#fff"
              />
              <g clip-path="url(#a)">
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.035"
                  d="M13.195 26.089c.78 1.113 4.168 1.987 5.768-.097 1.73.828 4.586.571 6.91-.725.323-.18.63-.408.816-.727.423-.721.433-1.721-.338-3.196-1.286-3.211-3.598-6.028-4.532-7.162-.192-.175-1.416-.423-2.161-.662-.33-.101-.943-.17-1.677.798-.348.458-1.928 1.584.077 2.341.31.08.54.225 1.956-.034.184-.032.645 0 .97.57l.678.97c.064.09.104.194.117.303.119 1.035.115 2.329.691 2.984-.89-.644-3.216-1.409-4.97.767m-4.316-1.21a4.63 4.63 0 0 1 5.805-.289"
                />
                <path
                  fill="#fff"
                  d="m26.288 15.97.43-.948.943-.426-.943-.425-.43-.947-.421.947-.952.425.952.426.42.947Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M11.804 12.083h16.553v16.553H11.804z" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[12px] mt-3 text-gray-200 text-center lg:text-base leading-4">
              Accelerate <br /> Recovery
            </span>
          </div>
          {/* Boost Strength container */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
            >
              <circle
                cx="19.856"
                cy="19.612"
                r="19"
                fill="#fff"
                fill-opacity=".15"
                stroke="#fff"
              />
              <path
                fill="#fff"
                d="M26.867 16.496c-1.13 0-1.76 1.122-1.504 1.955l-2.765 2.773a1.587 1.587 0 0 0-.81 0L19.8 19.238c.265-.834-.366-1.963-1.503-1.963-1.13 0-1.768 1.122-1.503 1.963l-3.553 3.544c-.833-.257-1.955.374-1.955 1.504 0 .857.701 1.558 1.558 1.558 1.13 0 1.76-1.122 1.504-1.956l3.544-3.552c.234.07.576.07.81 0l1.986 1.987c-.264.833.367 1.963 1.504 1.963 1.13 0 1.768-1.122 1.503-1.963l2.773-2.766c.834.258 1.956-.373 1.956-1.503 0-.857-.701-1.558-1.558-1.558Z"
              />
              <path
                fill="#fff"
                d="m22.193 17.275.732-1.612 1.605-.725-1.605-.724-.732-1.613-.717 1.613-1.62.724 1.62.725.717 1.612Zm-8.958 1.558.39-1.558 1.557-.39-1.558-.389-.39-1.558-.389 1.558-1.558.39 1.558.389.39 1.558Z"
              />
            </svg>
            <span className="text-[12px] mt-3 text-gray-200 text-center lg:text-base leading-4">
              Boost <br /> Strength
            </span>
          </div>
        </div>
      </div>

      <div className="mt-15">
        <h3 className="font-pangaia text-gray-200 text-2xl text-center font-extralight lg:text-3xl px-10">
          Unlock science led pathways to <br className="block md:hidden" />{" "}
          strength, stamina & sustained results
        </h3>
      </div>

      <div className="flex flex-col space-y-10 items-center md:flex-row md:items-end md:space-y-0 md:justify-between pt-12 pb-20 md:px-15">
        <div className="flex items-center justify-center space-x-2 relative">
          <a
            href="http://www.theresolute.club"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white py-2 px-6 rounded-3xl font-medium text-sm hover:underline hover:text-gray-600 transition-all duration-150"
          >
            theresolute.club
          </a>
          <span className="bg-white w-6 ml-1 h-3 absolute"></span>
          <span className="bg-white py-2 px-6 rounded-3xl font-medium text-sm">
            +91 6360265906
          </span>
        </div>

        <img
          src={barCode}
          alt="Bar Code"
          className="w-24 md:w-32 lg:w-36 border border-white rounded-sm"
        />
      </div>
    </div>
  );
}

export default HeroSection