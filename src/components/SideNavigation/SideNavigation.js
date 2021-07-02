import React from 'react';
import './SideNavigation.css'
import EOA from './images/EOA.png'
import Dashboard from './images/Dashboard.png'
import Stage from './images/Stage.png'
import Employees from './images/Employees.png'
import Welcome from './images/Welcome.png';
import Vector from './images/Vector.png';
import Skill from './images/Skill.png';
import Joining from './images/Joining.png'
import Know from './images/Know.png'
import Feedback from './images/Feedback.png'
import Background from './images/Background.png'
import Setting from './images/Setting.png'


const SideNavigation= () => {
	return(
		<div className="secondarycolor Rectangle1 colRectangle"> 
	        <a href=""><img className="EOA" src={EOA}/></a>
	        <a href=""><img className="Dashboard" src={Dashboard}/> 
	          <span className="Dashboard-text"> Dashboard </span>
	        </a>
	        <a href=""><img className="Stage" src={Stage}/> 
	          <span className="Stage-text"> Stage </span>
	        </a>
	        <a href="" className="rectangle6"><img className="Employees" src={Employees}/></a>
	        <a href=""><img className="Welcome" src={Welcome}/>
	          <span className="Welcome-text"> Welcome Stages </span>
	        </a>
	        <a href=""><img className="Vector" src={Vector}/></a>
	          <span className="Vector-text"> Offer Letter</span>
	        <a href=""><img className="Skill" src={Skill}/></a>
	        <a href=""><img className="Know" src={Know}/></a>
	          <span className="Know-text"> Know Your Company</span>
	        <a href=""><img className="Joining" src={Joining}/></a>
	        <a href=""><img className="Feedback" src={Feedback}/></a>
	          <span className="Feedback-text"> Feedback</span>
	        <a href=""><img className="Background" src={Background}/></a>
	          <span className="Background-text"> Backgroundcheck</span>
	        <a href=""><img className="Setting" src={Setting}/></a>
		</div>
		);
};

export default SideNavigation;