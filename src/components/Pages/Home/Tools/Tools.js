import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../assests/images/banner/action.gif'
const Tools = () => {
    return (
        <div>
            
            <div className="p-5 mx-auto sm:p-10 md:p-10 dark:bg-gray-800 dark:text-gray-100">
	        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		    <img src={img1} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		    <div className="p-6 pb-12 m-4 mx-auto -mt-10 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
			<Link to='' rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl"><span className='text-warning'>SMART TOOLS</span></Link>
			<p className="text-xs dark:text-gray-400">By
				<Link to='' rel="noopener noreferrer" href="#" className="text-xs font-semibold sm:text-2xl hover:underline">Video labeling suite</Link>
			</p>
			</div>
			<div className="dark:text-gray-100">
				<p>Label hours-long videos without cutting them into images. In your browser, with a multi-track timeline, built-in object tracking and segments tagging.</p>
			</div>

            
		</div>
	</div>
</div>
        </div>
    );
};

export default Tools;