import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Dataload.css'

const Dataload = () => {
    
    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data.slice(1,4)))
    },[])
    
    return (
        <div className="perent">
            {
                countries.map(country =>
                     <Display 
                    country={country}
                key={country.ccn3}>

                </Display>)
            }
        </div>
    )
};

export default Dataload;