import React from 'react'
import barCode from "/src/assets/images/footer-component/barcode.png";

const Footer: React.FC = () => {
  return (
    <div className="footer-bg px-7 pt-10 md:pt-12 md:px-12 lg:px-16 pb-20">
      {/* Top Right Logo Area */}
      <div className="flex justify-center mt-20">
        {/* Love SVG Icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <svg
            width="44"
            height="44"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
            <path
              d="M22.2884 17.9134C20.7438 19.5563 19.1992 21.1992 17.6545 22.8444L13.0251 17.909C11.9794 16.7953 11.9794 15.0046 13.0251 13.891C14.0707 12.7773 15.7563 12.7773 16.802 13.891L17.6611 14.804L18.5136 13.8976C19.5593 12.7839 21.2449 12.7839 22.2905 13.8976C23.3362 15.0113 23.3362 16.8019 22.2905 17.9156L22.2884 17.9134Z"
              fill="black"
            />
          </svg>
        </div>

        {/* Bird Icon */}
        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 -1 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.0508275C0.0223383 0.0158515 0.0274928 -0.0121297 0.0773244 0.00535833C0.158086 0.0350879 0.359131 0.412829 0.429583 0.516008C1.98639 2.71949 5.36635 3.32283 7.8734 3.37529C7.96791 3.37704 8.51777 3.38579 8.5487 3.35081L8.33563 3.05002C7.86137 2.21059 8.49028 1.42363 9.36663 1.37642C9.80137 1.35368 10.1193 1.55654 10.5385 1.43588C10.6296 1.40964 10.7568 1.33794 10.8358 1.32745C10.8891 1.3222 10.8685 1.34844 10.8702 1.38691C10.3461 1.52856 9.94055 1.95352 9.74466 2.45892C9.47317 3.15844 9.76357 3.81774 9.70858 4.54174C9.62782 5.62075 8.858 6.61757 8.08647 7.29785C6.80975 8.42233 5.37666 9.4139 4.08276 10.5244L3.81126 10.7185C4.29239 10.2096 4.84226 9.76016 5.30277 9.23027C5.87498 8.57098 7.23246 6.76622 7.27026 5.91455C7.29776 5.31471 6.7771 5.53156 6.40766 5.5438C3.40745 5.63649 0.957111 3.67084 0.101381 0.804559L0 0.269427V0.052576V0.0508275Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="mt-5 space-y-14">
        <h3 className="font-dm-sans text-white text-3xl md:text-5xl lg:text-6xl text-center">
          Step into what your <br className="hidden md:block" /> training's been
          missing
        </h3>
        <img src={barCode} alt="" className="mx-auto size-44" />
        <p className="font pangaia text-white text-center text-lg md:text-xl lg:text-2xl font-medium">
          10,000 journeys,powered by data. <br /> Yours starts here
        </p>
      </div>

      <div className="flex items-center justify-center space-x-2 relative mt-26">
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
    </div>
  );
}

export default Footer