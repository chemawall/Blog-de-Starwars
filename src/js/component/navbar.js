import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="col-12">
			<div className="row">
				<nav className="navbar navbar-light bg-light mb-3">
					<Link to="/">
						<span className="navbar-brand m-3 d-inline-flex ">
						<a href="https://3000-4geeksacade-reacthellow-jkp6s4xo261.ws-eu74.gitpod.io/">
							<img src="https://www.aaddpa.org/ckfinder/userfiles/files/starwars.png" 
							alt="MDN"
							className="m-3 col-md-4 col-2"
							/>
						</a>
						</span>
					</Link>
					<div className="d-inline-flex">
						<Link to="/demo">
							<button className="btn btn-warning col-md-6 col-4">Favoritos</button>
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
};
