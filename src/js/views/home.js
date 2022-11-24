import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import "../../styles/home.css";

export const Home = (props) => {

	const [characters, setCharacters] = useState()

	useEffect = (() => {
		fetch("https://www.swapi.tech/api/people")
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.error(err))
	})


	return (
	<div className="container testimonial-group">
		<h3>Characters</h3>
	  <div className="row text-center">
		<div className="col-4">
		<div className="card">
			<img src={props.image} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					{props.gender}
				</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
			</div>
		</div>
		<div className="col-4">2</div>
		<div className="col-4">3</div>
		<div className="col-4">4</div>
		<div className="col-4">5</div>
		<div className="col-4">6</div>
		<div className="col-4">7</div>
		<div className="col-4">8</div>
		<div className="col-4">9</div>
	  </div>
	</div>
	
)};

export default Home