import React from 'react'

const TheTeam: React.FC = () => {
  return (
    <div className="team-bg-img pb-16">
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

      <div className="px-14">
        <h4 className="font-dm-sans font-light text-gray-700 text-sm md:text-xl lg:text-2xl">
          Meet the Team
        </h4>
        <h2 className="font-dm-sans text-4xl md:text-5xl mt-4 lg:text-6xl tracking-wide">
          Guided by Experts
        </h2>
      </div>

      {/* Meet the Team */}
      <div className="px-12 md:px-14 mt-10 space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="member1 rounded-lg text-black">
          <div className="flex items-end justify-center">
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans mt-44">
              Dr. Gurmeet
            </span>
            <span className="absolute h-5 bg-white w-4 mb-1.5 ml-1"></span>
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans">
              Soni Bhalla
            </span>
          </div>

          <p className="text-white text-center font-dm-sans mt-2">
            <span className="rounded-xl font-medium text-xs bg-gray-900 py-1.5 px-6">
              CHIEF MEDICAL OFFICER
            </span>
          </p> 
        </div>

        <div className="member2 rounded-lg text-black">
          <div className="flex items-end justify-center">
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans mt-44">
              Dr. Sneha
            </span>
            <span className="absolute h-5 bg-white w-4 mb-1.5 ml-9"></span>
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans">
              Jana
            </span>
          </div>

          <p className="text-white text-center font-dm-sans mt-2">
            <span className="rounded-xl font-medium text-xs bg-gray-900 py-1.5 px-6">
              RESIDENT DOCTOR
            </span>
          </p> 
        </div>

        <div className="member3 rounded-lg text-black">
          <div className="flex items-end justify-center">
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans mt-44">
              Dr. Varsha
            </span>
            <span className="absolute h-5 bg-white ml-6 w-4 mb-1.5 "></span>
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans">
              Prasad
            </span>
          </div>

          <p className="text-white text-center font-dm-sans mt-2">
            <span className="rounded-xl font-medium text-xs bg-gray-900 py-1.5 px-6">
              CLINICAL PHARMACOLOGIST
            </span>
          </p> 
        </div>

        <div className="member4 rounded-lg text-black">
          <div className="flex items-end justify-center">
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans mt-44">
              Dr. Jyotsna
            </span>
            <span className="absolute h-5 bg-white ml-9 w-4 mb-1.5"></span>
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans">
              Mirlay
            </span>
          </div>

          <p className="text-white text-center font-dm-sans mt-2">
            <span className="rounded-xl font-medium text-xs bg-gray-900 py-1.5 px-6">
              GYNAECOLOGIST & HORMONE SPECIALIST
            </span>
          </p> 
        </div>

        <div className="member5 rounded-lg text-black">
          <div className="flex items-end justify-center">
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans mt-44">
              Dikson
            </span>
            <span className="absolute h-5 bg-white mr-2 w-4 mb-1.5"></span>
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans">
              Thomas
            </span>
          </div>

          <p className="text-white text-center font-dm-sans mt-2">
            <span className="rounded-xl font-medium text-xs bg-gray-900 py-1.5 px-6">
              PERFORMANCE COACH
            </span>
          </p> 
        </div>

        <div className="member6 rounded-lg text-black">
          <div className="flex items-end justify-center">
            <span className="bg-white px-5 py-1 rounded-4xl font-bold font-dm-sans mt-44">
              Subhisha
            </span>
          </div>

          <p className="text-white text-center font-dm-sans mt-2">
            <span className="rounded-xl font-medium text-xs bg-gray-900 py-1.5 px-6">
              NUTRITION COACH
            </span>
          </p> 
        </div>


      </div>
    </div>
  );
}

export default TheTeam