import {combineReducers} from 'redux';
import movie1 from './movie1.js'
import movie2 from './movie2.js'
import movie3 from './movie3.js'
import search from './search'
//3 reducers for 3 JSON files and 1 reducer for storing user serach(Movie name)
const movieApp = combineReducers({
    movie1,
    movie2,
    movie3,
    search
})

export default movieApp