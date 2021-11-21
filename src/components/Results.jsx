import react from 'react';
import {connect} from 'react-redux'
import Thumbnail from './Thumbnail';
import React from 'react'

const Results = ({results,search}) => {
    return (
        <div className='px-5 my-10 grid grid-cols-3'>
            {results.map(result=>(
            result.name.toLowerCase().includes(search.toLowerCase()) &&
            (
                <div>
                    <Thumbnail image_name={result}/>
                </div>
            )
                
            )
                
                )}
            
        </div>
    )
}
const mapStateToProps = state => {
    return{
    search: state.search
  }
}

export default connect(mapStateToProps)(Results);


