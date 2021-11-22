import {
    SearchIcon,
} from '@heroicons/react/outline';
import React from 'react'
import {HeaderItem} from './HeaderItem'
import {connect} from 'react-redux'

const Header = ({ dispatch,genre }) => {
    const handleSearch = e => {
        const value = e.target.value.trim()
        dispatch({type:"SEARCH",data:value})
    }
    return (
        <header className='items-start flex flex-col sm:flex-row m-5 justify-between h-auto '>

        <div className='flex px-7 sm:px-15 text-xl whitespace-nowrap
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


            <div className='items-end flex flex-grow justify-evenly max-w-xl '>
            <HeaderItem title='SEARCH' Icon={SearchIcon}/>
            <input  onChange={handleSearch}></input>
            </div>
            

        
            
        </header>
    )
}

export default connect()(Header);
