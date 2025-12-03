import React from "react";
import "./Journey.css"

const Journey: React.FC = () => {
  return (
    <section className="opti-journey-bg min-h-screen flex items-stretch font-dm-sans pb-10 md:pb-20">
      <div className="w-full bg-black/40 px-7 pt-10 md:pt-12 md:px-12 lg:px-16">
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

        <div className="relative ">
          {/* Top header row */}
          <div className="mb-12 sm:mb-14 lg:mb-16">
            <div className="">
              <p className="font-dm-sans font-medium text-gray-500 text-sm md:text-xl lg:text-2xl">
                Made for the Training-Obsessed
              </p>
              <h1 className="font-dm-sans text-white text-4xl md:text-5xl mt-4 lg:text-6xl tracking-wide">
                Your OptiME Journey,{" "}
                <span className="font-dm-sans text-white/70">
                  powered by Resolute
                </span>
              </h1>
            </div>
          </div>

          {/* Timeline line */}
          <div className="timeline-line" />

          {/* Timeline grid */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.5fr)_auto_minmax(0,1.5fr)] gap-y-10 sm:gap-y-12 lg:gap-y-14 relative z-10">
            {/* BASE */}
            <div className="md:col-start-1 md:pr-6 space-y-3">
              <p className="text-sm tracking-[0.18em] uppercase text-[#F4C9DA] mb-5 font-bold">
                <span className="border border-white rounded-[50%] px-2 py-px inline-block">
                  1
                </span>{" "}
                Base
              </p>
              <ul className="mt-4 space-y-1.5 text-sm md:text-base leading-relaxed text-[#FBE2F0]">
                <li>Book at-home Blood Biomarker Test</li>
                <li>Schedule full-body MRI Scan*</li>
                <li>Submit Health &amp; Performance Assessments</li>
                <li>Review Health Reports with our doctor</li>
              </ul>
              <div className="timeline-section-separator" />
            </div>

            {/* Dot column */}
            <div className="hidden md:flex md:col-start-2 items-start justify-center">
              <div className="timeline-dot mt-2" />
            </div>

            {/* BUILD */}
            <div className="md:col-start-3 md:row-start-2 md:pl-6 space-y-3">
              <p className="text-sm tracking-[0.18em] uppercase text-[#F4C9DA] text-left md:text-right font-bold">
                <span className="border border-white rounded-[50%] px-2 py-px inline-block">
                  2
                </span>{" "}
                Build
              </p>
              <div className="mt-4 space-y-3 text-sm sm:text-[15px] leading-relaxed text-[#FBE2F0] text-left md:text-right">
                <div>
                  <p className="font-medium">
                    Receive Hyper-Personalised Blueprint
                  </p>
                  <ul className="mt-2 space-y-1.5 text-gray-400">
                    <li>• Health Risks &amp; Mitigation Strategies</li>
                    <li>• Workout Performance Matrix</li>
                    <li>• Nutrition &amp; Supplementation Plan</li>
                    <li>• Sleep &amp; Recovery Strategies</li>
                    <li>• Personalised routines &amp; lifestyle protocol</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <p>Review blueprint with health coach</p>
                  <p>Receive Powerpack Supplement Kit</p>
                </div>
              </div>
              <div className="timeline-section-separator md:ml-auto" />
            </div>

            {/* Dot column for BUILD row */}
            <div className="hidden md:flex md:col-start-2 md:row-start-2 items-center justify-center">
              <div className="timeline-dot" />
            </div>

            {/* PEAK */}
            <div className="md:col-start-1 md:row-start-3 md:pr-6 space-y-3">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#F4C9DA]">
                <span className="border border-white rounded-[50%] px-2 py-px inline-block">
                  3
                </span>{" "}
                Peak
              </p>
              <ul className="mt-4 space-y-1.5 text-sm sm:text-[15px] leading-relaxed text-[#FBE2F0]">
                <li>Establish your habits &amp; routines</li>
                <li>Work towards your broader goals</li>
              </ul>
              <div className="timeline-section-separator" />
            </div>

            {/* Dot column for PEAK row */}
            <div className="hidden md:flex md:col-start-2 md:row-start-3 items-center justify-center">
              <div className="timeline-dot" />
            </div>

            {/* SUSTAIN */}
            <div className="md:col-start-3 md:row-start-4 md:pl-6 space-y-3">
              <p className="text-sm tracking-[0.18em] uppercase text-[#F4C9DA] text-left md:text-right font-bold">
                <span className="border border-white rounded-[50%] px-2 py-px inline-block">
                  4
                </span>{" "}
                Sustain
              </p>
              <ul className="mt-4 space-y-1.5 text-sm sm:text-[15px] leading-relaxed text-[#FBE2F0] text-left md:text-right">
                <li>Personalised trainer nudges to keep you on track</li>
                <li>Schedule repeat biomarker test</li>
                <li>Receive final blueprint</li>
              </ul>
              <div className="timeline-section-separator md:ml-auto" />
            </div>

            {/* Dot column for SUSTAIN row */}
            <div className="hidden md:flex md:col-start-2 md:row-start-4 items-end justify-center">
              <div className="timeline-dot mb-2" />
            </div>
          </div>

          {/* Mobile timeline dots */}
          <div className="mt-10 flex md:hidden flex-col gap-10 items-center">
            <div className="timeline-dot" />
            <div className="timeline-dot" />
            <div className="timeline-dot" />
            <div className="timeline-dot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
