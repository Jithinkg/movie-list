import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Nav} from "./components/Nav"
import {Results} from "./components/Results"
import {connect} from 'react-redux'
const api1 = require('../src/utils/apilist/CONTENTLISTINGPAGE-PAGE1.json')
function App({movieList, genre}) {
  console.log('movieList', movieList)
  return (  
    <div className="App">
      <div className='flex flex-row'>
      <Nav genre={genre}/>
      <Header/>
      </div>
      
      <Results results={movieList}/>
    </div>
  );
}

const mapStateToProps = state => {
    return{
    movieList: state.movie.contentitems.content,
    genre: state.movie.title
  }
}

export default connect(mapStateToProps)(App);
