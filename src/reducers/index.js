import {combineReducers} from 'redux';
import movie from './movie'
import search from './search'
const movieApp = combineReducers({
    movie,
    search
})

export default movieApp