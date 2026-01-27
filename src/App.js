import './App.css';
import Portfolio from "./components/portfolio";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
