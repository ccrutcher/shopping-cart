import React from 'react'

const Card = (props) => {
    const onChange = event => {
        console.log(event.target.value);
    }

    return(
        <div className="card-container">
            <div className="card" onClick={() => console.log(props.name, props.index)}>
                <img src={props.source}></img>
            </div>
            <div className="card-info">
                <p>{props.name}</p>
                <p>$10/pet</p>
                <input type="number" defaultValue={props.number} onChange={onChange}></input>
            </div>
        </div>

    )
}

export default Card;