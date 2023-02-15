import React, { FC } from 'react';
import logo from '../../assets/logo.jpg';
import './Logo.css';

const Logo: FC = () => {
	return <img className='image' src={logo} />;
};

export default Logo;
