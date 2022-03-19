import React from 'react';
import './Displayloadone.css'

const Displayloadone = (props) => {
    console.log(props.photo);
    const {title, thumbnailUrl} = props.photo;
    return (
        <div>
            
            <img className="image" src={thumbnailUrl} alt="" />
            <h2>Title: {title.slice(0, 30)}</h2>
            
        </div>
    );
};

export default Displayloadone;