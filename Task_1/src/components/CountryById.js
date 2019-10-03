import React, { useState, useEffect } from 'react'
import '../App.css';

function CountryById ({match}) {

    const [country, setCountry] = useState({});
    //console.log(match);
    useEffect(() => {
      fetchCountry();
    },[]);
    
    const fetchCountry = async () => {
      const data = await fetch(`https://countriesnode.herokuapp.com/v1/countries/${match.params.code}`);
      const json = await data.json();
      setCountry(json);
      console.log(json);

    };
    return (
      <div className="component">
        <h1>Country Details</h1>
        <h2>{country.name}({country.native})</h2>
        <h3>Currency : {country.currency}</h3>
        <h3>Area Code : {country.phone}</h3>


      </div>
    )

}


export default CountryById;