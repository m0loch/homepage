import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

import Main from './components/main';
import About from './components/about';


function App() {

  return (
    <div className="App">
      <Routes>

        <Route path="/about" element={<About/>} />
        <Route path="/homepage" element={<Main/>} />

      </Routes>

      <a href="mailto:romeo.graifenberg@gmail.com">Contact me</a>
    </div>
  );
}

export default App;
