import React, {  } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav () {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link class="nav-item active nav-link navbar-brand" to="/">
                <h3>Nk</h3>            
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ml-auto">
                    <Link class="nav-item active nav-link" to="/countries">
                        <li className="mynav-item  ml-5">Countries</li>
                    </Link>
                    <Link className="nav-item active nav-link" to="/about">
                        <li className="mynav-item  ml-5">About</li>
                    </Link>

                </ul>
            </div>
        </nav>
    )

}



export default Nav;