import React from "react"
import "./Travel.css"

const Travel = ({destination, country, photo, distance }) => {
    return (
        <header className="App-header">
          <p>
         <h2>destination: {destination} </h2>
         <h2>country: {country}</h2> 
         <h2><img src={photo} ></img></h2>
         <h2>distance: {distance}</h2>


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
