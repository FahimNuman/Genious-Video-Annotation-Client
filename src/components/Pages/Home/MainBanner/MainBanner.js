import React from 'react';
import img2 from '../../../../assests/images/banner/img2.gif'
import img3 from '../../../../assests/images/banner/s-1.jpg'
import img4 from '../../../../assests/images/banner/s-2.jpg'
import img5 from '../../../../assests/images/banner/s-3.jpg'
import img6 from '../../../../assests/images/banner/s-4.jpg'
import img7 from '../../../../assests/images/banner/s-5.jpg'

const MainBanner = () => {
    return (
        <div>
            <section>
	<div className="dark:bg-violet-400 ">
		<div className="container flex flex-col items-center px-4  pb-10 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
		
			<h1 className="text-3xl font-bold leading-none sm:text-5xl xl:max-w-5xl dark:text-gray-900">To Be The<span className='text-secondary'>Industry Leader in</span>  Genious Video Annotation! </h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900 sm:text-3xl">Interactive <span className='text-secondary'>AI assisted labeling </span></p>
			<div className="flex flex-wrap justify-center">
			<button className="btn btn-secondary btn-wide mr-1">Request A Demo</button>
			<button className="btn btn-secondary btn-wide mr-1">Explore The Platform</button>
                    
			</div><br/><br/><br/><br/>
			<img src={img2} alt="" className="w-full mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40
			 dark:bg-gray-500" />
			<div className="relative w-full  flex gap-4 py-6  overflow-x-auto">
				
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img3} alt="" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img4} alt="" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img5} alt="" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img6} alt="" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img7} alt="" />

</div>

		</div>
		
		
		
	</div>

    </section>
        </div>
    );
};

export default MainBanner;