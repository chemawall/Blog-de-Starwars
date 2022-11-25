import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="col-12 col-md-9 mx-auto">
			<nav className="navbar navbar-dark bg-dark mb-3 ">
				<Link to="/home">
					<span className="navbar-brand mb-0 h1">
					<img 
						className="icono m-3" 
						src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png" 
						alt="MDN"/>
					</span>
				</Link>
				<div className="boton ml-auto">
					<Link to="/demo">
						<button className="btn btn-warning m-3">Favoritos</button>
					</Link>
				</div>
			</nav>
		</div>	
	);
};
