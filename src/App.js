import './App.css';
import Gallery from './components/Gallery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Gallery/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

