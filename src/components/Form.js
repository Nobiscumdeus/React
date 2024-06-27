import React from 'react'
import { useState} from 'react'

function Form(){
    const [inputs,setInputs]=useState({})
    const [textarea,setTextarea]=useState("The content of text area goes here ...")
    const [myCar,setMyCar]=useState("Volvo")

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))

        setMyCar(event.target.value);
        setTextarea(event.target.value);

        
        

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(inputs.name);
        alert(textarea)
        alert(myCar)

    }

    return(
        <form
      className="w-100 min-h-50 flex flex-col gap-4 px-4 py-4 rounded-md shadow-md bg-white"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-1">
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        Select your car:
        <select
          name="myCar"
          value={inputs.myCar}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </label>
      <label className="flex flex-col gap-1">
        Additional comments:
        <textarea
          name="textarea"
          value={inputs.textarea}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 h-24"
        />
      </label>
      <input
        type="submit"
        value="Submit"
        className="rounded-md bg-green-300 hover:bg-green-400 cursor-pointer p-2"
      />
    </form>
    )

}


export default Form;