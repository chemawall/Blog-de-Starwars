import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InfoCharacters = () => {

    const [characters, setCharacters] = useState([])

    const params = useParams()

    useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${params.uid}`)
		.then(response => {
            return response.json()
        }).then(response => {
            setCharacters(response.results)
        })
    }, [])

    return ( 
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src= "..." className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">name</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default InfoCharacters