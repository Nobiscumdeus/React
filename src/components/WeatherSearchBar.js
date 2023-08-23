import React , {useState} from 'react'



const SearchBar=({onCityChange})=>{

    const [inputCity,setinputCity]=useState("");

    const handleInputChange=(e)=>{
        setinputCity(e.target.value) //The main essence of this is to help update the inputcity value 
    }

    const handleSubmit=(e)=>{

        e.preventDefault()
        onCityChange(inputCity) //This does final supply of the updated input city to the outside component

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={inputCity}
                placeholder="Enter the Name of the city "
                onChange={handleInputChange}
                /> <br/>
                <button type="submit"> Search </button>
            </form>
        </div>
    )

}

export default SearchBar