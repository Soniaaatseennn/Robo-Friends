import React from 'react';

const Card = (props) => {
    return (
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <img src={`https://robohash.org/set_set5/${props.name}?size=200x200 `}alt='robots' />
            </div>

            <div>
                <p>{props.name}</p>
                <p>{props.email}</p>
                
            </div>
        </div>
    );
};


export default Card;