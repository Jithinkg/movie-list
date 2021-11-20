import react from 'react';

import {Thumbnail} from './Thumbnail';
import React from 'react'

export const Results = ({results}) => {
    return (
        <div className='px-5 my-10 sm:grid grid-cols-3'>
            {results.map(result=>(
                <Thumbnail image_name={result}/>
            )
                
                )}
        </div>
    )
}


