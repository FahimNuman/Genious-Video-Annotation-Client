import React from 'react';
import img1 from '../../../../assests/images/banner/laptop3.webp'
const Features = () => {
    return (
        <div>
            <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-10 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src={img1}
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              GeniousAI Cloud
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              We will bring your
              <br className="hidden md:block" />
              business{' '}
              <span className="inline-block text-deep-purple-accent-400">
                online Visualization
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            BasicAI Cloud supports 2D & 3D visualizations of frames and objects for efficient QA and analysis.
            </p>
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
            <button className="btn btn-secondary">Learnmore</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
        </div>
    );
};

export default Features;