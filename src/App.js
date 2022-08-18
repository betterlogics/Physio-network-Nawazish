import logo from './logo.svg';
import './App.css';
import Slider from './Components/Slider/Slider';
import Header from './Components/Header/Header';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Main_resreach from './Components/Main_resreach/Main_resreach';
import Main_login from './Components/Main_login/Main_login';
import Main_resource from './Components/Main_resource/Main_resource';
import Main_blog from './Components/Main_blog/Main_blog';

function App() {
  return (
    <div className="App">
     <Router>
        <Header/>
        <Routes>
     
        <Route exact path='/Main_resreach' element ={<Main_resreach/>}/>
        <Route exact path='/Main_login' element ={<Main_login/>}/>
        <Route exact path='/Main_resource' element ={<Main_resource/>}/>
        <Route exact path='/Main_blog' element ={<Main_blog/>}/>
        </Routes>
      </Router>  
      {/* <Slider/> */}

    </div>
  );
}

export default App;
