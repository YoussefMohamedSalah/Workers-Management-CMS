import './App.css';
import { useState } from 'react';
import Main from './Pages/Main';
import Login from './Pages/Login';
import CompoundsFiltration from './Pages/CompoundsFiltration';
import { LoginContext } from './Contexts/LoginContext';
// import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Test from './Pages/Test';

function App() {
  // const Navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [compoundFilter, setCompoundFilter] = useState(true);

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <div id={theme} style={{ minHeight: '100vh', maxHeight: '100%' }}>
      <Header />
      <Routes>
        <Route path="/" element={<CompoundsFiltration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
