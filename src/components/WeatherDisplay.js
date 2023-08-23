import React ,{useState, useEffect} from 'react'


const WeatherDisplayComponent=({city})=>{
    const[weatherData,setweatherData]=useState(null)
    const apiKey="cafd4cb652f41096c0e782eeb8f84428"

    useEffect(()=>{
        fetchWeather(city)
    },[city])

    const fetchWeather=async(city)=>{
        try{
            const response=await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            if(response.ok){
                const data=await response.json();
                setweatherData(data)
            }else{
                console.error("Ooops!! There was an error in connection ")

            }

        }catch(error){
            console.error("Error fetching data ",error )

        }

    }
    return(
        <div>
            {weatherData ? (
                <div>
                      <h4>Weather in {city}</h4>
                        <p>Temperature: {weatherData.main.temp}°C</p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                </div>
               

            ): 
            ("Sorry, no weather data available now ")}
        </div>
    )


}





export default WeatherDisplayComponent





/**  const WeatherDisplay=({weather})=>{
    return(
        <div>
           {weather ? //This uses a ternary operator to do something based on if weather is set or not 
            (
            <div>
                <h3> Weather in {weather.name} </h3>
                <hr/>
               
                 <p> Temperature is {weather.main.temp} Celsius</p>
                 <p> Description : {weather.weather[0].description} </p>
                 <p> Visibility : {weather.visibility} </p>
                
               
                
             </div>
             ) 
             : (<p> Ooops!!! No weather data available </p>)}
        </div>
    )


}


*/
