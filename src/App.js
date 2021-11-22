import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {Nav} from "./components/Nav"
import Results from "./components/Results"
import {connect} from 'react-redux'
const api1 = require('../src/utils/apilist/CONTENTLISTINGPAGE-PAGE1.json')
function App({movieList1,movieList2,movieList3, genre}) {
  console.log('movieList1', movieList1)
  console.log('movieList2', movieList2)
  console.log('movieList3', movieList3)

  return (  
    <div className="App">
      <div className='flex flex-row'>
      {/* <Nav genre={genre}/> */}
      <Header genre={genre}/>
      </div>
      
      <Results results={movieList1}/>
      <Results results={movieList2}/>
      <Results results={movieList3}/>
    </div>
  );
}

const mapStateToProps = state => {
    return{
    movieList1: state.movie1.contentitems.content,
    movieList2: state.movie2.contentitems.content,
    movieList3: state.movie3.contentitems.content,
    genre: state.movie1.title
  }
}

export default connect(mapStateToProps)(App);
