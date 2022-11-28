import React from "react";

const OneCharacter = (props) => {

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text text-light">
                    <ul>
                        <li>birth year: {props.todo.birth_year}</li>
                        <li>eye_color: {props.todo.eye_color}</li>
                        <li>gender: {props.todo.gender}</li>
                        <li>hair_color: {props.todo.hair_color}</li>
                        <li>height: {props.todo.height}</li>
                        <li>mass: {props.todo.mass}</li>
                        <li>skin_color: {props.todo.skin_color}</li>
                    </ul>
                </p>
            </div>
            </div>
        </div>
    )

}
export default OneCharacter