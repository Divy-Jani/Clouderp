import React from "react";

const ScheduleButton = () => {
  return (
    <button
      type="button"
      className="text-white bg-orangee hover:bg-orangee-600 focus:outline-none rounded-2xl text-m px-6 py-3 text-center"
    >
      Schedule a Demo
    </button>
  );
};

const ExpertButton = () => {
  return (
    <button
      type="button"
      className="text-black hover:bg-orangee-600 focus:outline-none rounded-2xl text-m px-6 py-3 text-center border border-gray-700 font-medium"

    >
     Meet an Expert
    </button>
  );
};

export { ScheduleButton, ExpertButton };