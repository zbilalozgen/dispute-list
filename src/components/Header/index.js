import React from 'react';
import Logo from '../../assets/Logo.png'
import './index.scss'

const Dispute = () => {
  return (
    <div className='header-container'>
      <img alt="brand-logo" className="header-container__logo" src={Logo}/>
    </div>
  );
};

export default Dispute;