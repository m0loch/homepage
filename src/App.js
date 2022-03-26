import './css/App.css';
import './css/components.css';

import {
  Routes,
  Route
} from "react-router-dom";

import posts from './data/posts';

import NavBar from './components/navbar';
import Main from './components/main';
import About from './components/about';


function App() {

  return (
    <div className="App">
      <NavBar/>

      <Routes>

        <Route path="/about" element={<About/>} />
        <Route path="/homepage" element={<Main posts={posts}/>} />

      </Routes>
    </div>
  );
}

export default App;
