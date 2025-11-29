import React from 'react'
import './HealthOpt.css'
import birdLogo from "/src/assets/images/hero-component/bird-logo.png";

const HealthOpt: React.FC = () => {
  return (
    <div className="diagram-page p-10 md:p-12">
      <div>
        <div className="flex justify-end">
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
              fill="white"
            />
          </svg>

          {/* Bird Icon */}
          <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
            <img src={birdLogo} alt="Bird Logo" className="w-4" />
          </div>
        </div>

        <div>
          <h4 className="font-dm-sans font-medium text-sm md:text-base lg:text-lg text-[#A1A1A1] text-center mt-7">
            optiME - Total Health Optimisation
          </h4>
          <h2 className="font-dm-sans text-[42px] md:text-5xl lg:text-6xl text-center leading-13 lg:leading-16 mt-7">
            Real Change, from <br className='hidden md:block' /> the inside out
          </h2>
        </div>

        {/* Mobile, Tablet and Desktop View */}
        <div className='lg:flex lg:justify-between lg:items-center lg:mb-13'>
          <div className="diagram-circle font-pangaia lg:w-[50%]">
            {/* Diagonal lines */}
            <span className="diagram-line line-1" />
            <span className="diagram-line line-2" />

            {/* Centre textured circle */}
            <div className="diagram-centre" />

            {/* Labels */}
            <div className="diagram-label label-top">
              App + Coaching
              <br />
              Success Systems
            </div>

            <div className="diagram-label label-right">
              Discovery
              <br />
              Diagnostics
            </div>

            <div className="diagram-label label-bottom">
              Hyper personalised
              <br />
              Blueprint
            </div>

            <div className="diagram-label label-left">
              Health
              <br />
              Intelligence AI
            </div>

            {/* Trainer icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 12 14"
              fill="none"
              className="bg-white w-10 h-10 rounded-full relative p-2 top-39 md:top-54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.721 13.2811V11.361C10.721 9.55091 10.721 8.64523 10.1584 8.08326C9.59641 7.52065 8.69073 7.52065 6.88066 7.52065L5.60055 8.80076L4.32043 7.52065C2.51036 7.52065 1.60468 7.52065 1.04271 8.08326C0.480103 8.64523 0.480103 9.55091 0.480103 11.361V13.2811M8.16077 9.44082V11.361M9.12085 10.4009H7.20068M7.84074 3.36029V2.72024C7.84074 2.42605 7.7828 2.13474 7.67021 1.86295C7.55763 1.59116 7.39262 1.3442 7.1846 1.13618C6.97658 0.928158 6.72962 0.763146 6.45783 0.650566C6.18604 0.537986 5.89473 0.480042 5.60055 0.480042C5.30636 0.480042 5.01505 0.537986 4.74326 0.650566C4.47147 0.763146 4.22451 0.928158 4.01649 1.13618C3.80847 1.3442 3.64346 1.59116 3.53088 1.86295C3.4183 2.13474 3.36035 2.42605 3.36035 2.72024V3.36029C3.36035 3.65448 3.4183 3.94578 3.53088 4.21758C3.64346 4.48937 3.80847 4.73633 4.01649 4.94435C4.22451 5.15237 4.47147 5.31738 4.74326 5.42996C5.01505 5.54254 5.30636 5.60048 5.60055 5.60048C5.89473 5.60048 6.18604 5.54254 6.45783 5.42996C6.72962 5.31738 6.97658 5.15237 7.1846 4.94435C7.39262 4.73633 7.55763 4.48937 7.67021 4.21758C7.7828 3.94578 7.84074 3.65448 7.84074 3.36029Z"
                stroke="black"
                stroke-width="0.960083"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-center mt-7 text-sm md:text-base font-dm-sans absolute -bottom-12">
              Your Trainer
            </p>
          </div>

          <div className="mt-24 lg:mt-0 md:flex md:justify-between lg:flex-col lg:justify-center lg:w-[50%] lg:ml-10">
            <article className="font-pangaia text-xl md:text-2xl lg:text-3xl text-center md:text-left font-semibold mb-5 md:mb-0 md:mr-7 md:w-[50%] lg:w-full lg:mb-5">
              Resolute’s optiME maps your body data to your health goals
            </article>
            <section className="text-sm md:text-lg text-gray-400 text-center md:text-left font-dm-sans leading-5 md:w-[60%] lg:w-full">
              Advanced diagnostics, AI-driven insights, and expert guidance power
              your hyper-personalized blueprint — transforming potential into
              progress across fitness & holistic health.
            </section>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default HealthOpt
