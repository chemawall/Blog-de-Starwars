import React, { useState, useEffect } from "react";


const Characters = () => {

    const [listOfCharacters, setListOfCharacters] = useState([])

	useEffect(() => {
		fetch('https://www.swapi.tech/api/people')
		.then(response => {
            return response.json()
        }).then(response => {
            setListOfCharacters(response)
        })
    }, [])


	return (
        <div className="container testimonial-group mt-3">
            <h3 className="text-warning text-start">Characters</h3>
        <div className="row text-center">
                <div className="col-4">
                    {
                        listOfCharacters.map((character) => {
                            return <div className="card">
                                        <img src= "..." className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{character.name}</h5>
                                            <p className="card-text">
                                                dfsgfsd
                                            </p>
                                            <a href="#" className="btn btn-warning">Go!</a>
                                        </div>
                                    </div>
                        })
                    }
                
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
    )
    } 

export default Characters