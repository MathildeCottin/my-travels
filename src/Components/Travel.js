import React from "react"
import logo from '../logo.svg';

import "./Travel.css"

const Travel = ({destination, country, photo, distance }) => {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
         <ul>
         <li>destination: {destination} </li>
         <li>country: {country}</li> 
         <li><img src={photo} ></img></li>
         <li>distance: {distance}</li>
         </ul>


          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        )
    
}

export default Travel
