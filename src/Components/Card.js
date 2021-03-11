import React from 'react'

const Card = (props) => {
    return(
        <div className="card" onClick={() => console.log(props.name)}>
            <img src={props.source}></img>
        </div>
    )
}

export default Card;