import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneCharacter from "./oneCharacter";

const InfoCharacters = () => {

    const [characters, setCharacters] = useState([])

    const params = useParams()

    useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${params.uid}`)
		.then(response => {
            return response.json()
        }).then(response => {
            console.log(response)
            setCharacters(response.results.properties)
        })
    }, [])

    return ( 
        <div>
            {
                characters.map((character)=>{
                    <div className="card mb-3">
                        <OneCharacter 
                            name={character.name}
                        
                        />  
                    </div>
                    })
            }
        </div>
        )
}

export default InfoCharacters