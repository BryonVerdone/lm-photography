import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
const Button = ({ text }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('./contact');
  };
  return (
    <button onClick={() => handleNavigate()} className='button'>
      {text}
    </button>
  );
};

export default Button;
