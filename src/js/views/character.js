import React from "react"

const Character = (props) => {
    return (
        <div className="row">
            <div className="card bg-dark border border-secondary p-0">
                <img src= {props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">
                            
                        </p>
                        <a href="#" className="btn btn-warning">Go!</a>
                    </div>
            </div>
        </div>
    )
}

export default Character