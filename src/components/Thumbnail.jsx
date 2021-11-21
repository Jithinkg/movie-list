import React from 'react'
import LazyLoad from 'react-lazyload'

const Thumbnail = ({image_name}) => {
    let loc = image_name.posterimage 
    if(image_name.posterimage === 'posterthatismissing.jpg' )
    {
        loc='placeholder_for_missing_posters.png'
    }
    return (
        <div className='p-2 group cursor-pointer 
        transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>

                <div>
                    <LazyLoad once>
                    <img src={loc} alt='missing img'/>
                    </LazyLoad>
            <div className='p-2'>
                <h2 className='mt-1 text-2xl text-white transition-all
                duration-100 ease-in-out group-hover:font-bold'>{image_name.name}</h2>

            </div>
                </div>
            
        </div>

    )
}



export default Thumbnail;

