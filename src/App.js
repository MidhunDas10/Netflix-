
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Rowpost from './components/Rowpost/Rowpost';
import {originals,action,trending,horror,comedy,romance,actionmovies,documentary} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Banner/> 
      <Rowpost url={trending} title="Trending"  /> 
      <Rowpost url={originals} title="Netflix Originals" isSmall /> 
      <Rowpost url={action} title="Action" isSmall /> 
      <Rowpost url={horror} title="Horror" isSmall /> 
      <Rowpost url={comedy} title="Comedy" isSmall /> 
      <Rowpost url={romance} title="Romance" isSmall /> 
      <Rowpost url={documentary} title="Documentary" isSmall /> 
      <Rowpost url={actionmovies} title="Action Movies" isSmall /> 
    </div>
  );
}
export default App ; 
