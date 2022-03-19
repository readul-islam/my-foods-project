import React from 'react';
import './Display.css'

const Display = (props) => {
    // console.log(props);
    const {name,flags,population} =props?.country;
    return (
        <div className="country">
            <img className="img" src={flags.png} alt="" />
            <p>Population: {population}</p>
            <h2>{name.common}</h2>
        </div>
    )
};





export default Display;