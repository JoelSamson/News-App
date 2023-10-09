import React from 'react';

const Head = ({ headingClass }) => {
  return (
    <div className={`text-center ${headingClass}`}>
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          News
        </span> Portal.
      </h1>
    </div>
  );
};

export default Head;
