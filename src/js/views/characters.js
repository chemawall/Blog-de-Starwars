import React, { useState, useEffect } from "react";
import Character from "./character";


const Characters = () => {

    const [listOfCharacters, setListOfCharacters] = useState([])

	useEffect(() => {
		fetch('https://www.swapi.tech/api/people')
		.then(response => {
            return response.json()
        }).then(response => {
            setListOfCharacters(response.results)
            console.log (response)
        })
    }, [])

    

	return (
        <div className="container testimonial-group mt-3">
            <h3 className="text-warning text-start">Characters</h3>
        <div className="row text-center">
                    {
                        listOfCharacters.map((character) => {
                            return <div className="col-4">
                                        <Character 
                                            name={character.name}
                                            uid={character.uid}
                                            image= {`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                                        />
                                    </div>
                        })
                    }
		</div>
	</div>
    )
    } 

export default Characters