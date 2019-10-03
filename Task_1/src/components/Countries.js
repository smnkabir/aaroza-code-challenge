import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Countries() {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetchCountries();
    },[]);

    const fetchCountries = async () => {
        const data = await fetch(
            "https://countriesnode.herokuapp.com/v1/countries"
            );
        const json = await data.json();
        //console.log(json);
        setCountries(json);
    };
    return (
      <div className="component">
        <h2>Here is country list</h2>
        {countries.map(country => (
            <div key={country.code} className="col s12 m4">
                <div key={country.code} className="card">
                    <Link className="badge badge-secondary" to= {`/countries/${country.code}`}>
                        <h3 className= "card-header">
                            {country.name}({country.native})
                        </h3>
                    </Link>
                     
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Languages : {country.languages.map(language =>(
                            <p key={language}>{language}</p>
                        ))} </li>
                        <li className="list-group-item">Continent : {country.continent}</li>
                    </ul>  
                </div>
            </div>     
        ))}
      </div>
    )
}


export default Countries;