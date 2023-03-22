import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tweets" element={<Tweet/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
