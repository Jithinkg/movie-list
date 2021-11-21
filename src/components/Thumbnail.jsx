import React from 'react'
import {connect} from 'react-redux'

const Thumbnail = ({image_name,search}) => {
    const loc = image_name.posterimage
    console.log('search',search)
    return (
        <div className='p-2 group cursor-pointer 
        transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            {image_name.name.includes(search) && 

                (<div>
                    <img src={loc} alt='missing img'/>
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

