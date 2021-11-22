import React from 'react'

export const Nav = ({genre}) => {
    console.log('genre', genre)
    return (
        <nav>
            <div className='flex px-7 sm:px-15 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20 
            scrollbar-hide'>
                <h2
                 className='last:pr-24 cursor-pointer 
                 transition duration:100 transform
                 hover:scale-125 
                 hover:text-white  
                 active:text-red-500
                '>{genre}</h2>
                        
        </div>
        </nav>
    );
}

