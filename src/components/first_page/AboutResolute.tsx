import React from 'react'
import birdShape from "/src/assets/images/about-resolute-component/bird-logo.png";

const AboutResolute: React.FC = () => {
  return (
    <div className="bg-[#020000] about-img">
      <div className="flex justify-end mb-5 px-10 pt-10 md:pt-12 md:px-12 lg:px-16 lg:pt-16">
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
          <img src={birdShape} alt="Bird Logo" className="w-4" />
        </div>
      </div>

      <div className="text-white px-10 md:px-12 lg:px-16">
        <h4 className="font-dm-sans font-light text-gray-400 text-sm md:text-xl lg:text-2xl">
          About Resolute
        </h4>
        <h2 className="font-dm-sans text-4xl md:text-5xl leading-9 md:leading-11 mt-4 lg:text-6xl lg:leading-14">
          India’s 360° platform for health optimisation and longevity
        </h2>
      </div>

      {/* Vectors */}
      <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden md:my-10 lg:my-24">
        {/* Vector One */}
        <svg
          className="absolute w-full top-35 md:top-20 lg:top-12"
          viewBox="0 0 595 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-274.669 76.8319C-274.669 76.8319 -113.768 76.8319 -23.2938 76.8319C121.157 76.8319 129.485 1.5 234.764 1.5C315.986 1.5 364.307 76.8319 429.593 76.8319C529.115 76.8319 757.049 76.8319 837.756 76.8319"
            stroke="#D66F50"
            strokeWidth="3"
          />
        </svg>

        {/* Vector Two */}
        <svg
          className="absolute top-50 w-full"
          viewBox="0 0 595 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-289.297 1.5C-214.892 1.5 -141.232 1.50024 -60.0023 1.5C12.4877 1.5 58.1959 46.114 124.564 46.114C209.393 46.114 250.522 1.5 415.039 1.5C546.652 1.5 746.813 1.5 830.442 1.5"
            stroke="#6D413E"
            strokeWidth="3"
          />
        </svg>

        {/* Vector Three */}
        <svg
          className="absolute w-full top-50"
          viewBox="0 0 595 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-287.425 1.5C-287.425 1.5 -327.517 1.5 -36.5935 1.5C254.33 1.5 301.207 56.3533 416.754 56.3533C526.349 56.3533 519.04 1.5 651.138 1.5C756.816 1.5 801.054 1.5 809.964 1.5"
            stroke="#807980"
            strokeWidth="3"
          />
        </svg>

        <img
          src={birdShape}
          alt=""
          className="absolute w-32 top-32 md:top-18 lg:top-6 md:w-50 lg:w-75"
        />
      </div>

      <div className="font-dm-sans text-xs md:text-sm lg:text-base px-12 lg:px-14 pb-16 text-gray-400 md:flex md:space-x-10">
        <p>
          Resolute started after realizing how little even the most committed
          high-performers know about what’s actually going on under the hood and
          how much faster they could progress with the right data.{" "}
          <br className="hidden md:block" />
          <br className="hidden md:block" />
          At Resolute, we combine deep diagnostics, intelligent algorithms, and
          precision coaching to build personalized pathways that optimize
          health, recovery, and performance — from the inside out.
        </p>
        <br />
        <p>
          We’re a team of medical scientists, data engineers, and performance
          enthusiasts who got tired of seeing fit people fall short due to
          hidden internal blind spots. So we set out to change that.{" "}
          <br className="hidden md:block" />
          <br className="hidden md:block" />
          With optiME, our flagship journey, you're guided through a
          personalized path to higher energy, sharper focus, and faster
          recovery—driven by your own health data.
        </p>
      </div>
    </div>
  );
}

export default AboutResolute


