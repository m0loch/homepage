import './css/App.css';
import './css/components.css';

import {
  Routes,
  Route
} from "react-router-dom";

import games from './data/projects';
import posts from './data/posts';

import NavBar from './components/navbar';
import Main from './components/main';
import About from './components/about';
import Square from './components/square';
import Fifteen from './components/projects/fifteen/fifteen';
import Mosaic from './components/projects/mosaic/mosaic';

function App() {

  return (
    <>
      <NavBar/>

      <Routes>

        {/* Projects */}
        <Route path="/projects/fifteen" element={<Fifteen/>} />
        <Route path="/projects/mosaic" element={<Mosaic img='/assets/mosaic/ff7remake.jpg' rows={5} cols={10}/>} />
        <Route path="/projects/next" element={
          <section className="main">
            <div className="main-text">
              <h1>Possible followups</h1>
              <br/>
              <span>TODO: brief summary of possible development and/or projects that will be published</span>
            </div>
          </section>
        } />


        {/* Main sections  */}
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={
          <section className="sub-section">
            {
              games.map(item =>
                <Square
                  {...item}
                />
            )}
          </section>
          } />
        <Route path="/" element={<Main posts={posts}/>} />

      </Routes>
    </>
  );
}

export default App;
