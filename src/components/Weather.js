import React , { useState } from 'react'

import SearchBar from './WeatherSearchBar.js'
import WeatherDisplayComponent from './WeatherDisplay.js'


//Collect your API Key

const WeatherComponent=()=>{
    const [city,setCity]=useState("Ibadan") //Default City 

    const handleCityChange=(newCity)=>{
        setCity(newCity)
    }
    return (
        <div>
            <h3> (2) Weather Application </h3>
            <SearchBar onCityChange={handleCityChange} />
            <WeatherDisplayComponent city={city} />

        </div>
    )
}

export default WeatherComponent 