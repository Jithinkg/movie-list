import React from 'react'

export const Thumbnail = ({image_name}) => {
    const loc = image_name.posterimage
    return (
        <div className='p-2 group cursor-pointer 
        transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <img src={loc} alt='missing img'/>
            <div className='p-2'>
                <h2 className='mt-1 text-2xl text-white transition-all
                duration-100 ease-in-out group-hover:font-bold'>{image_name.name}</h2>

            </div>
        </div>

    )
}

