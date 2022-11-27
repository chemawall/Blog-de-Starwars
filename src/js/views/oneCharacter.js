import React from "react";

const OneCharacter = (props) => {

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src= "..." className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    birth year: {props.birth_year}

                </p>
            </div>
            </div>
        </div>
    )

}
export default OneCharacter