import React, { useEffect, useState } from 'react';
import Displayloadone from '../Displayloadone/Displayloadone';
import './Dataloadone.css'



const Dataloadone = () => {
    const [photos, setPhotos] = useState([]);
    // console.log(photos);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data.slice(0, 21)))
    },[])
    return (
        
         <div>
             <h1>Second Api</h1>
              <div className="mainDiv">
                
            {
                photos.map(photo => <Displayloadone photo= {photo} key={photo.id}></Displayloadone>)
            }
            </div>
         </div>   
           
        
    );
};

export default Dataloadone;