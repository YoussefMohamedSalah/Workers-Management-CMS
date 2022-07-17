import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../Contexts/LoginContext';

function CompoundsFiltration() {
  const { compoundFilter, setCompoundFilter } = useContext(LoginContext);

  const Navigate = useNavigate();
  return (
    <div>
      <h1 style={{ color: 'white' }}>Compounds Filtration</h1>
      <h1 style={{ color: 'white' }}>Compounds Filtration</h1>
      <h1 style={{ color: 'white' }}>Compounds Filtration</h1>
      <h1 style={{ color: 'white' }}>Compounds Filtration</h1>
      <h1 style={{ color: 'white' }}>Compounds Filtration</h1>
      <Link to={'/login'}>
        <button>click to Navigate to login</button>
      </Link>
    </div>
  );
}

export default CompoundsFiltration;
