import React from "react";

const ResoluteApp: React.FC = () => {
  return (
    <div className="resolute-app-bg">
      <div className="px-7 pt-10 md:pt-12 md:px-12 lg:px-16">
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
        <div className="mb-14">
          <p className="font-dm-sans font-medium text-gray-500 text-sm md:text-xl lg:text-2xl">
            Built for momentum, not just check-ins
          </p>
          <h1 className="font-dm-sans text-white text-4xl md:text-5xl mt-6 lg:text-6xl tracking-wide">
            The Resoute App
          </h1>
          <p className="font-dm-sans md:text-lg lg:text-xl text-white/70 mt-7">
            Using Behavioural science techniques, the Resolute App{" "}
            <br className="hidden md:block" /> helps you build habits that
            stick―through triggers, <br className="hidden md:block" /> positive
            reinforcement, and easy-to-action interventions
          </p>
        </div>
      </div>

      <div className="app-bg px-7 md:px-12 lg:px-16 text-[#F5F5F5] space-y-3 flex flex-col  pb-20">
        <p className="font-dm-sans md:text-lg pt-10">
          WITH RESOLUTE APP ACCESS, YOU GET:
        </p>
        <div className="flex items-center">
          <HealthScoreIcon />
          <div className="ml-2">
            <p className="font-pangaia md:text-lg">Health Score & Health Data</p>
            <span className="font-dm-sans text-xs text-gray-400 md:text-sm">visualized from your biomakers</span>
          </div>
        </div>

        <div className="flex items-center">
          <ProgressIcon />
          <div className="ml-2">
            <p className="font-pangaia md:text-lg">Journey Progree Tracking</p>
            <span className="font-dm-sans text-xs text-gray-400 md:text-sm">mapping your milestone to peak health</span>
          </div>
        </div>

        <div className="flex items-center">
          <InterventionIcon />
          <div className="ml-2">
            <p className="font-pangaia md:text-lg">Intervention Knowledge</p>
            <span className="font-dm-sans text-xs text-gray-400 md:text-sm">to improve your nutritionm movement, <br /> mindset and recovery</span>
          </div>
        </div>

        <div className="flex items-center">
          <TaskIcon />
          <div className="ml-2">
            <p className="font-pangaia md:text-lg">Guided Tasks</p>
            <span className="font-dm-sans text-xs text-gray-400 md:text-sm">personalized to your health optimization goals</span>
          </div>
        </div>

        <div className="flex items-center">
          <WellnessIcon />
          <div className="ml-2">
            <p className="font-pangaia md:text-lg">Precision Wellness Modules</p>
            <span className="font-dm-sans text-xs text-gray-400 md:text-sm">for better sleep, smarter hydration, <br /> stress resilience & sustainable energy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResoluteApp;

const HealthScoreIcon = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.5" cy="19.5" r="19.5" fill="white" fill-opacity="0.28" />
      <path
        d="M15.888 13.2051C16.0241 13.2151 16.153 13.2705 16.254 13.3624C16.3549 13.4543 16.422 13.5775 16.4446 13.7122L17.9072 22.4328L19.7266 16.0825C19.7631 15.9552 19.8401 15.8434 19.9459 15.7638C20.0516 15.6842 20.1804 15.6412 20.3128 15.6413C20.4452 15.6414 20.5739 15.6845 20.6795 15.7643C20.7852 15.844 20.862 15.956 20.8984 16.0833L22.1318 20.4013L22.8396 19.193C22.8934 19.1012 22.9703 19.025 23.0627 18.9721C23.1551 18.9192 23.2597 18.8914 23.3662 18.8916H24.8751C25.0207 18.4286 25.3273 18.033 25.7393 17.7765C26.1513 17.5199 26.6416 17.4194 27.1213 17.4931C27.601 17.5667 28.0385 17.8097 28.3546 18.178C28.6707 18.5463 28.8445 19.0156 28.8445 19.501C28.8445 19.9863 28.6707 20.4557 28.3546 20.824C28.0385 21.1923 27.601 21.4353 27.1213 21.5089C26.6416 21.5826 26.1513 21.482 25.7393 21.2255C25.3273 20.969 25.0207 20.5734 24.8751 20.1104H23.7148L22.4634 22.2475C22.403 22.3504 22.3137 22.4333 22.2066 22.4859C22.0995 22.5386 21.9793 22.5586 21.8609 22.5435C21.7426 22.5285 21.6312 22.479 21.5407 22.4012C21.4502 22.3235 21.3845 22.2209 21.3518 22.1061L20.3117 18.4658L18.3371 25.3565C18.2988 25.4891 18.2167 25.6048 18.1041 25.6847C17.9915 25.7645 17.8552 25.8038 17.7173 25.7961C17.5795 25.7883 17.4484 25.734 17.3455 25.642C17.2426 25.5501 17.1739 25.4259 17.1507 25.2898L15.6556 16.3807L14.5887 19.6879C14.5491 19.8106 14.4716 19.9177 14.3674 19.9936C14.2631 20.0696 14.1374 20.1104 14.0085 20.1104H11.3741C11.2125 20.1104 11.0574 20.0462 10.9431 19.9319C10.8289 19.8176 10.7646 19.6626 10.7646 19.501C10.7646 19.3394 10.8289 19.1843 10.9431 19.0701C11.0574 18.9558 11.2125 18.8916 11.3741 18.8916H13.5648L15.2631 13.626C15.305 13.496 15.3894 13.3838 15.5027 13.3074C15.616 13.2311 15.7517 13.1951 15.888 13.2051Z"
        fill="white"
      />
    </svg>
  );
};

const ProgressIcon = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.5" cy="19.5" r="19.5" fill="white" fill-opacity="0.28" />
      <path
        d="M19.5 20.2814V11.6764L25.7581 14.8055L19.5 17.9346"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.1971 18.108C26.6134 19.391 26.6523 20.7666 26.3093 22.0711C25.9663 23.3756 25.2558 24.5542 24.2622 25.4665C23.2687 26.3788 22.034 26.9865 20.705 27.2173C19.376 27.4481 18.0087 27.2923 16.7657 26.7684C15.5228 26.2444 14.4565 25.3745 13.6937 24.262C12.931 23.1495 12.5038 21.8413 12.4632 20.493C12.4225 19.1448 12.77 17.8132 13.4643 16.6568C14.1586 15.5003 15.1705 14.5677 16.3797 13.9698"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.372 17.9315C15.98 18.4533 15.7248 19.0649 15.6297 19.7105C15.5345 20.3562 15.6025 21.0154 15.8273 21.6281C16.0521 22.2408 16.4266 22.7875 16.9167 23.2184C17.4069 23.6493 17.9971 23.9507 18.6335 24.0951C19.2699 24.2396 19.9324 24.2225 20.5606 24.0454C21.1887 23.8683 21.7625 23.5369 22.2298 23.0812C22.6971 22.6256 23.0429 22.0603 23.2358 21.4369C23.4287 20.8134 23.4625 20.1516 23.3342 19.5117"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const InterventionIcon = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.5" cy="19.5" r="19.5" fill="white" fill-opacity="0.28" />
      <path
        d="M19.4997 12.8333V11.3417C19.4997 10.9667 19.0497 10.7833 18.7913 11.05L16.458 13.375C16.2913 13.5417 16.2913 13.8 16.458 13.9667L18.783 16.2917C19.0497 16.55 19.4997 16.3667 19.4997 15.9917V14.5C22.258 14.5 24.4997 16.7417 24.4997 19.5C24.4997 20.1583 24.3747 20.8 24.133 21.375C24.008 21.675 24.0997 22.0167 24.3247 22.2417C24.7497 22.6667 25.4663 22.5167 25.6913 21.9583C25.9997 21.2 26.1663 20.3667 26.1663 19.5C26.1663 15.8167 23.183 12.8333 19.4997 12.8333ZM19.4997 24.5C16.7413 24.5 14.4997 22.2583 14.4997 19.5C14.4997 18.8417 14.6247 18.2 14.8663 17.625C14.9913 17.325 14.8997 16.9833 14.6747 16.7583C14.2497 16.3333 13.533 16.4833 13.308 17.0417C12.9997 17.8 12.833 18.6333 12.833 19.5C12.833 23.1833 15.8163 26.1667 19.4997 26.1667V27.6583C19.4997 28.0333 19.9497 28.2167 20.208 27.95L22.533 25.625C22.6997 25.4583 22.6997 25.2 22.533 25.0333L20.208 22.7083C20.1493 22.6507 20.0748 22.6118 19.994 22.5965C19.9131 22.5812 19.8296 22.5901 19.7538 22.6222C19.6781 22.6543 19.6135 22.7081 19.5683 22.7768C19.5231 22.8455 19.4992 22.9261 19.4997 23.0083V24.5Z"
        fill="white"
      />
    </svg>
  );
};

const TaskIcon = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.5" cy="19.5" r="19.5" fill="white" fill-opacity="0.28" />
      <path
        d="M17.1521 22.5187L25.274 14.3969C25.4656 14.2052 25.6892 14.1094 25.9448 14.1094C26.2004 14.1094 26.424 14.2052 26.6156 14.3969C26.8073 14.5885 26.9031 14.8163 26.9031 15.0802C26.9031 15.344 26.8073 15.5715 26.6156 15.7625L17.8229 24.5792C17.6313 24.7708 17.4076 24.8667 17.1521 24.8667C16.8965 24.8667 16.6729 24.7708 16.4813 24.5792L12.3604 20.4583C12.1688 20.2667 12.0768 20.0392 12.0844 19.776C12.0921 19.5128 12.1921 19.285 12.3844 19.0927C12.5767 18.9004 12.8045 18.8046 13.0677 18.8052C13.3309 18.8058 13.5583 18.9017 13.75 19.0927L17.1521 22.5187Z"
        fill="white"
      />
    </svg>
  );
};

const WellnessIcon = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.5" cy="19.5" r="19.5" fill="white" fill-opacity="0.28" />
      <path
        d="M25.4507 23.468V25.4518H24.1282V23.468H22.8057V22.1455H26.7732V23.468H25.4507ZM14.8706 23.468V25.4518H13.5481V23.468H12.2256V22.1455H16.1931V23.468H14.8706ZM18.8381 15.533V13.5492H20.1606V15.533H21.4832V16.8555H17.5156V15.533H18.8381ZM18.8381 18.178H20.1606V25.4518H18.8381V18.178ZM13.5481 20.823V13.5492H14.8706V20.823H13.5481ZM24.1282 20.823V13.5492H25.4507V20.823H24.1282Z"
        fill="white"
      />
    </svg>
  );
};
