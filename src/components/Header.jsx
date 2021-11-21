import {
    SearchIcon,
} from '@heroicons/react/outline';
import React from 'react'
import {HeaderItem} from './HeaderItem'
import {connect} from 'react-redux'

const Header = ({ dispatch }) => {
    const handleSearch = e => {
        const value = e.target.value.trim()
        dispatch({type:"SEARCH",data:value})
    }
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto '>
            <div className='flex flex-grow justify-evenly max-w-2xl '>
            <HeaderItem title='SEARCH' Icon={SearchIcon}/>
            </div>
            <input onChange={handleSearch}></input>
            
        </header>
    )
}

export default connect()(Header);
