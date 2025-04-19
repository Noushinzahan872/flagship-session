import React from 'react';
import PhoneCart from './PhoneCart';

const PhonesContainer = ({phones}) => {
    console.log(phones)
    return (
        <div className='py-12'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md-8'>
            
            {
                phones.map(phone=> <PhoneCart key={phone.id} phone={phone}></PhoneCart>)
            }
             
             <button class="relative inline-block px-4 py-2 font-medium group">
    <span class="absolute inset-0  h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span class="relative text-black group-hover:text-white">Show More</span>
</button>

           </div>
        </div>
    );
};

export default PhonesContainer;