import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Nav} from "./components/Nav"
import {Results} from "./components/Results"
const api1 = require('../src/utils/apilist/CONTENTLISTINGPAGE-PAGE1.json')
function App() {
  return (  
    <div className="App">
      <Header/>
      <Nav/>
      <Results results={api1.page.contentitems.content}/>
    </div>
  );
}

export default App;
