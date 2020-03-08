import React from  "react";
import { store } from "../../Services/store";


const Nav = ()=>{
	return(
		<nav className="gridBox1 navPosition">
			<div>
				<div className="serverPanel centerContent">
					<img src="/assets/home_icoon.svg"  alt="home"/>
				</div>
				<div className="border2"/>
				{}
				<div className="serverPanel centerContent">
					<img src="/assets/plus_icoon.svg" height="30px" alt='Server'/>
				</div>
				<div className="serverPanel centerContent">
					<img src="/assets/search_icoon.svg" height="30px" alt="Discover"/>
				</div>
				<div className="border2"/>
			</div>
		</nav>
	);
}

export default Nav;