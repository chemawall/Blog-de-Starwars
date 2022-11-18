import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/home">
				<span className="navbar-brand mb-0 h1">
				<img 
					className="icono m-3"
					src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png" 
					alt="MDN"/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning m-3">Favoritos</button>
				</Link>
			</div>
		</nav>
				
	);
};
