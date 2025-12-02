import React from 'react'
import amarPhoto from '/src/assets/images/why-us-component/amar-photo.png'
import ICMR from './accreditation-icons/ICMR';
import NABL from './accreditation-icons/NABL';
import HIPAA from './accreditation-icons/HIPAA';
import CERT from './accreditation-icons/CERT';
import ISO from './accreditation-icons/ISO';

const WhyUsPage: React.FC = () => {
  return (
    <div className="why-bg-image px-7 pt-10 md:pt-12 md:px-12 lg:px-16 pb-20 md:pb-20">
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

      {/* Header Section */}
      <div className="mb-20 mt-5">
        <h4 className="font-dm-sans font-medium text-gray-700 text-sm md:text-xl lg:text-2xl">
          Why Us
        </h4>
        <h1 className="font-dm-sans text-[#262626] text-4xl md:text-5xl mt-4 lg:text-6xl tracking-wide">
          We don't optimize in <br className="hidden md:block" /> theory - we
          optimize <br className="hidden md:block" /> real people
        </h1>
      </div>

      <div className="md:flex justify-between">
        <div className="flex flex-col justify-center items-center">
          <img
            src={amarPhoto}
            alt="Amar Devanda photo"
            className="w-80 md:w-70 lg:w-100 rounded-2xl"
          />
          <span className="font-semibold text-base font-pangaia text-[#030303] mt-4 md:text-lg">
            Amar Devanda
          </span>
          <span className="font-dm-sans text-sm md:text-base text-[#030303]/50">
            Runner, National Record Holder
          </span>
        </div>
        <p className="mt-7 md:mt-0 text-[#030303]/70 md:w-[50%] md:text-lg lg:text-xl">
          Amar, an ultrarunner and endurance athlete, broke the national 12-hour
          record after signing up for a Resolute journey. While his training was
          already intense, it was the hyper-personalised recommendations into
          his recovery, inflammation markers, and nutritional gaps that gave him
          the edge. Resolute helped fine-tune what his body needed to sustain
          peak output.
        </p>
      </div>
      <hr className="text-[#090909]/20 mt-16" />

      <div className="flex justify-center">
        <h5 className="text-gray-100 tracking-widest font-dm-sans text-center bg-gray-600 mt-8 rounded-md py-2 px-5">
          ACCREDITATIONS
        </h5>
      </div>

      {/* Accreditation Icons */}
      <div className="grid grid-cols-3 md:grid-cols-5 shadow-2xl justify-items-center space-y-5 md:space-y-0 rounded-lg items-center px-7 py-10 gap-5 mt-5 bg-transparent">
        <ICMR />
        <NABL />
        <HIPAA />
        <CERT />
        <span className="col-start-3">
          <ISO />
        </span>
      </div>
    </div>
  );
}

export default WhyUsPage;
