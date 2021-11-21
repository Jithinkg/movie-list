import {combineReducers} from 'redux';
import movie1 from './movie1.js'
import movie2 from './movie2.js'
import movie3 from './movie3.js'

import search from './search'
const movieApp = combineReducers({
    movie1,
    movie2,
    movie3,
    search
})

export default movieApp