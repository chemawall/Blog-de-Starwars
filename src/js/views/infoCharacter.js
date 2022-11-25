import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const InfoCharacters = () => {

    const params = useParams()
    useEffect(() => {
        console.log(params)
    }, [])

    return ( 
        <h3 className="text-white">detalle del personaje { params.uid }</h3>
    )
}

export default InfoCharacters