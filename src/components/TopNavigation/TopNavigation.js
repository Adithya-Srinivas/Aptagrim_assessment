import React from 'react';
import './TopNavigation.css'
import logo1 from './Group 3620.png';
import logo3 from './Group 406.png';
import logo2 from './Group 414.png'

const TopNavigation = () => {
	return(
		<div className="gradient Rectangle2">
		  <p className="employee"> Employees </p>
		  <input className="searchbar" type="text" placeholder="Search.."/>
		  <a href=""><img className="logo1" src={logo1}/></a>
		  <a href=""><img className="logo2" src={logo2}/></a>
		  <a href=""><img className="logo3" src={logo3}/></a>
		</div>
		);
};

export default TopNavigation;