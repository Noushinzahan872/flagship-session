
import React, { useEffect, useState } from 'react';
 import PhoneCart from './PhoneCart';
 
 const PhonesContainer = ({phones}) => {
    const [displayPhones,setDisplayPhones]=useState([])
    const [showAll,setShowAll]=useState(false)
    
    //  console.log(phones)
    useEffect(()=> {
        if(showAll){
            setDisplayPhones(phones)
        }
        else{
       setDisplayPhones(phones.slice(0,6))
        }
    },[phones,showAll])

     return (
         <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md-8'>
             
             {
                displayPhones.map(phone=> (
                <PhoneCart key={phone.id} phone={phone}></PhoneCart>))
             }
              
              <button onClick={()=>
            {setShowAll(prv=>!prv)
                if(showAll)window.scrollTo(0,400)
              }}
         className="relative inline-block px-4 py-2 font-medium group">
     <span className="absolute inset-0  h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
     <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
     <span className="relative text-black group-hover:text-white">{showAll?'show Less':'Show All'}</span>
 </button>
 
            </div>
         </div>
     );
 };
 
 export default PhonesContainer;