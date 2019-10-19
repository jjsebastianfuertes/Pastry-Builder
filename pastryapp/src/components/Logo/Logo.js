import React from 'react';
import imgLogo from '../../assets/images/burger-logo.png';
import lStyle from './Logo.module.css';

const logo = () => (
    <div className={lStyle.logo}>
        <img src={imgLogo} alt="Pastry Logo" />
    </div>
);

export default logo;