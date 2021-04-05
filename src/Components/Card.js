import React from 'react'

const Card = (props) => {

    return(
        <div className="card-container">
            <div className="card">
                <img src={props.source} alt="A cute animal"></img>
            </div>
            <div className="card-info">
                <p>{props.name}</p>
                <p>$10/pet</p>
                <input type="number" 
                    defaultValue={props.number} 
                    onClick={(e) => props.changeNum(props.index, props.number, e.target.value)}>
                </input>
            </div>
        </div>

    )
}

export default Card;