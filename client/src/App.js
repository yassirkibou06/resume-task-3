import './App.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  const location = useLocation();
  const path = location.pathname === "/resume";
  return (
    <div className="App font-body">
      <header className="App-header absolute left-5 z-10 top-2">
        <nav className='flex items-center space-x-1'>
          <div className='w-5 h-5 rounded-full bg-red-500'></div>
          <Link to="/" className={`font-semibold text-2xl ${path ? "text-white" : "text-black"}`}>Resume</Link>
        </nav>
      </header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
