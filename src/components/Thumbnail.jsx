import React from 'react'
import {connect} from 'react-redux'
import LazyLoad from 'react-lazyload'

const Thumbnail = ({image_name,search}) => {
    let loc = image_name.posterimage 
    if(image_name.posterimage === 'posterthatismissing.jpg' )
    {
        loc='placeholder_for_missing_posters.png'
    }
    console.log('search',search)
    return (
        <div className='p-2 group cursor-pointer 
        transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            {image_name.name.toLowerCase().includes(search.toLowerCase()) && 

                (<div>
                    <LazyLoad once>
                    <img src={loc} alt='missing img'/>
                    </LazyLoad>
            <div className='p-2'>
                <h2 className='mt-1 text-2xl text-white transition-all
                duration-100 ease-in-out group-hover:font-bold'>{image_name.name}</h2>

            </div>
                </div>
                )
            
            }
            
        </div>

    )
}

const mapStateToProps = state => {
    return{
    search: state.search
  }
}

export default connect(mapStateToProps)(Thumbnail);

