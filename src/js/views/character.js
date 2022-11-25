import React from "react"

const Character = (props) => {
    return (
        <div className="card text-dark">
             <img src= {props.image} className="card-img-top" alt="..."/>
                 <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        {props.uid}
                    </p>
                    <a href="#" className="btn btn-warning">Go!</a>
                </div>
        </div>
    )
}

export default Character