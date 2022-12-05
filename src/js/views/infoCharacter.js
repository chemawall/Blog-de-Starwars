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
            setCharacters(response.result.properties)
        })
    }, [])

    return ( 
        <div>
            <OneCharacter 
                todo={characters}
                image={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
            
            />    
        </div>
        )
}

export default InfoCharacters