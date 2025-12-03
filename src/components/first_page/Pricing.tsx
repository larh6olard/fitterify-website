import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="bg-[#F8F8F9] font-dm-sans relative overflow-hidden pt-10 md:pt-12 pb-20">
      {/* --- Background Geometric Lines --- */}
      {/* Top Right Line & Dot */}
      <svg
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-60"
        viewBox="0 0 400 400"
      >
        <line
          x1="200"
          y1="0"
          x2="400"
          y2="200"
          stroke="#9CA3AF"
          strokeWidth="1"
        />
        <line
          x1="300"
          y1="0"
          x2="0"
          y2="200"
          stroke="#9CA3AF"
          strokeWidth="0.5"
        />
        <circle cx="240" cy="40" r="3" fill="#9CA3AF" />
        <circle cx="360" cy="160" r="3" fill="#9CA3AF" />
      </svg>

      {/* Bottom Right Line & Dot */}
      <svg
        className="absolute bottom-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-60"
        viewBox="0 0 300 300"
      >
        <line
          x1="0"
          y1="500"
          x2="500"
          y2="0"
          stroke="#9CA3AF"
          strokeWidth="1"
        />
        <circle cx="250" cy="250" r="3" fill="#9CA3AF" />
      </svg>

      {/* Top Right Logo Area */}
      <div className="flex justify-end mb-5 px-7 md:px-12 lg:px-16">
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
            fill="#400B1F"
          />
        </svg>

        {/* Bird Icon */}
        <div className="w-8 h-8 border border-[#400B1F] rounded-full flex items-center justify-center">
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
              fill="#400B1F"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 px-7 md:px-12 lg:px-16">
        {/* --- Hero Section --- */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-2 text-gray-400 font-medium text-sm md:text-xl lg:text-2xl">
            <h2>optiME Club Edition</h2>
            <span className="text-gray-300">—</span>
            <h2>Pricing</h2>
          </div>

          <h1 className="text-black mb-5 text-4xl md:text-5xl lg:text-6xl tracking-wide md:mt-4">
            Next Level Starts Here
          </h1>

          <p className="md:text-lg lg:text-xl text-gray-500 mt-5 leading-relaxed">
            No matter how hard you train, your biology sets the ceiling. With
            optiME Club, we turn guesswork into precision — connecting your
            health data, workouts, and recovery in one system, with your trainer
            fully in sync.
          </p>
        </div>

        {/* --- What's Included Section --- */}
        <div className="mb-10">
          {/* Badge */}
          <div className="inline-block bg-[#420B20] text-white px-8 py-2 rounded-full text-lg mb-10 shadow-lg">
            What’s Included
          </div>

          <div className="md:flex md:flex-row  md:justify-between space-y-10 md:space-y-0">
            {/* Column 1: Diagnostics */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-900">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M3 12h3m12 0h3M12 3v3m0 12v3" />
                    <circle cx="19" cy="5" r="2" />
                    <circle cx="5" cy="19" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A]">
                  Diagnostics
                </h3>
              </div>
              <ul className="space-y-1 text-gray-700 font-medium">
                <li>1x Ultra Biomarker test</li>
                <li>1x Health Status Assessment</li>
              </ul>
            </div>

            {/* Column 2: Tools */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-900">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6"
                  >
                    <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A]">Tools</h3>
              </div>
              <ul className="space-y-1 text-gray-700 font-medium">
                <li>1x Personalised Health Blueprint</li>
                <li>Access to Resolute™ app</li>
                <li className="text-xs text-gray-500 font-normal pl-1">
                  (For 3 Months)
                </li>
                <li>1x Trainer Signals</li>
              </ul>
            </div>

            {/* Column 3: Coaching */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-900">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[#1A1A1A]">Coaching</h3>
              </div>
              <ul className="space-y-1 text-gray-700 font-medium">
                <li>1x Doctor Consultation</li>
                <li>1x Health Coach Consultation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Pricing Bar --- */}
        <div className="border-t border-gray-200 border-b py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="max-w-md text-gray-500 text-sm leading-relaxed">
            All-in-one system to help you improve strength, stamina, recovery,
            and resilience—through Data, Science & Expert Guidance
          </div>

          <div className="text-right">
            <div className="text-gray-300 text-lg decoration-gray-300 line-through decoration-1">
              ₹8,999
            </div>
            <div className="flex items-baseline gap-2 justify-end">
              <span className="text-5xl text-[#1A1A1A] font-normal">
                ₹8,999
              </span>
            </div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">
              + GST
            </div>
          </div>
        </div>
      </div>

      {/* --- Visual Element (Rope) --- */}
      <div className="rope-img mb-3"></div>

      <div className="relative z-10 px-7 md:px-12 lg:px-16">
        {/* --- Add-ons Section --- */}
        <div className="mb-12 mt-5">
          {/* Badge */}
          <div className="inline-block bg-[#420B20] text-white px-10 py-2 rounded-full text-lg mb-10 shadow-lg">
            Add-ons
          </div>

          <div className="space-y-10 md:flex md:justify-between text-sm lg:text-base">
            {/* Column 1 */}
            <ul className="space-y-2 text-[#1A1A1A]">
              <li>Sports Performance Essentials</li>
              <li>Sports Performance Ultra</li>
              <li>Hair Mineral Toxicity Test</li>
              <li>Cardiac Risk Assessment</li>
              <li>Gut Metabolism Test</li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-2 text-[#1A1A1A]">
              <li>TruAGE Epigenetic Age Test</li>
              <li>IgG Food Intolerances Test</li>
              <li>Gut Microbiome Test</li>
              <li>CAC Scoring</li>
              <li>Full-body MRI</li>
            </ul>

            {/* Column 3 */}
            <ul className="space-y-2 text-[#1A1A1A]">
              <li>CGM + Analytics</li>
              <li>Health Coaching</li>
              <li>Performance Coaching</li>
            </ul>
          </div>
        </div>

        {/* --- Footer Note --- */}
        <div className="text-gray-500 text-sm">
          (Contact us for individual prices)
        </div>

        {/* Bottom Line decorative */}
        <div className="absolute -bottom-7.5 h-px border opacity-20 mt-8 w-[90%]"></div>
        {/* <div className="mt-8 border-t border-gray-400 w-full"></div> */}
      </div>
    </div>
  );
};

export default Pricing;
