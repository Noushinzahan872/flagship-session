import React from 'react';
import bannerImg from '../assets/images/banner.png'

const Hero = () => {
    return (
        <div className='py-12'>
           <img src={bannerImg} alt="banner image" className='w-full mx-auto md:max-w-md' />
           <div className='text-center space-y-4'>
             <h1 className='font-thin text-7xl text-gray-900'> Browse,Search,View,Buy</h1>
             <p className='text-gray-500'>best place to browse</p>
             <form className='flex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                <input type="text" placeholder='Search phone by name' className='bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0'/>
               
                <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span className="relative text-black group-hover:text-white">Search</span>
</button>

             </form>
           </div>
        </div>
    );
};

export default Hero;