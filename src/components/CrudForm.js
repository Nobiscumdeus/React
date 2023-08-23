import React , { useState } from 'react'

//This is a Simple Crud Application that attempts to show how to handle all html form fields in React 

const Form=()=>
{
    const [formData,setFormData] =useState({
        id:"",
        textInput:"",
        passwordInput:"",
        numberInput:"",
        emailInput:"",
        dateInput:"",
        selectInput:"Option 1",
        textareaInput:"",
        checkboxInput:false // This is like a default option 
        

    })

    const [items,setItems]=useState([]); //This will store the details in form of a list


    /**
     * [name]: type === 'checkbox' ? checked : value,: This is where the magic happens. It updates the specific property in the new form data object based on user input.

type === 'checkbox' ? checked : value, is a ternary operator. It's like asking a question: "Is the input field a checkbox?"
If the input field is a checkbox, the condition type === 'checkbox' is true, so it assigns the checked value to the property. 
This is because for checkboxes, checked is either true (checked) or false (not checked).
     */
    const handleChange=(event)=>{
        const{name,value,type,checked}=event.target
        setFormData((prevData)=>({...prevData, 
        [name]:type ==='checkbox' ?checked :value, }))
        /**setFormData((prevData) => { ... }): This uses the setFormData function provided by React to update the form data 
        state. The function argument prevData represents the current state of the form data.

        { ...prevData }: This spread operator ... creates
         a new object by copying all properties from the existing form data. 
         This ensures that any other properties that are not being updated remain the same. */

    }


    const handleSubmit=(event)=>{
        event.preventDefault()
        if(formData.id)
        {
            /**
             *  If formData.id exists, it means we are in update mode else in create mode 
             * *You know formid is automatically set only when the form is being created 
            // Handle update logic here,
             */
            const updatedItems=items.map((item)=>{
                if(item.id === formData.id){
                    return formData;
                }
                return item;
            });
            setItems(updatedItems); //Updates the item here 


        }else{
            //It means we are creating the form the first time and setting the id automatically using Date.now()
            //This is using the spread operator 
            setItems([...items, { ...formData, id: Date.now() }]);
        }

        setFormData({

            //This resets the form data after submission
            id: '',
            textInput: '',
            passwordInput: '',
            numberInput: '',
            emailInput: '',
            dateInput: '',
            selectInput: 'option1',
            textareaInput: '',
            checkboxInput: false,
          });

       
    }

    const handleEdit=(id)=>{
        const selectedItem=items.find((item)=>item.id ===id)
        setFormData(selectedItem)

    }
    const handleDelete=(id)=>{
        const filteredItems=items.filter((item)=>item.id !==id )
        setItems(filteredItems)
    }


   return(
    <>
    <div>
        <h3> (4) A Simple Crud Form App </h3>
        <h5> Fill in Details Below ... </h5>
        <form onSubmit={handleSubmit} class="form">
            
            {/*  Names field */}
        
            <div class="form-group">
              <input type="text" class="form-control" name="textInput" value={formData.textInput} onChange={handleChange} placeholder="Enter your Names "/>

            </div>
              {/*  Password field */}
            <div class="form-group">
              <input type="password" class="form-control" name="passwordInput" 
              value={formData.passwordInput} onChange={handleChange} placeholder="Enter your Password"/> 
            </div>
              {/*  Number or Contact Field */}
            <div class="form-group">
              <input type="number" class="form-control" name="numberInput" 
              value={formData.numberInput} onChange={handleChange} placeholder="Enter your Contact"/> 
            </div>
              {/*  Email Field  */}
            <div class="form-group">
              <input type="email" class="form-control" name="emailInput" 
              value={formData.emailInput} onChange={handleChange} placeholder="Enter your Email"/> 
            </div>
              {/* Date Field */}
            <div class="form-group">
              <input type="date" class="form-control" name="dateInput" 
              value={formData.dateInput} onChange={handleChange} placeholder="Enter your Date of Birth "/> 
            </div>
              {/*  selection Field  */}
           <div class="form-group">
            <label clSs="form-label"> Select your Year of Entry to Medical School</label> <br/>
                <select name="selectInput" class="form-control" value={formData.selectInput} onChange={handleChange}>
                    <option value="2018" selected> 2018</option>
                    <option value="2019"> 2019</option>
                    <option value="2020"> 2020</option>
                    <option value="2021"> 2021</option>
                    <option value="2022"> 2022</option>
                    <option value="2023"> 2023</option>
                    <option value="2024"> 2024</option>
                </select>
           </div>
                  {/*  Sex field */}
           <div class="form-group">
            <label class="form-label">Are you prepared ? </label> <br/>
            <input type="checkbox" class="form-check-input" name="checkboxInput" checked={formData.checkboxInput} onChange={handleChange} />

           </div>
           <div class="form-group"> 
            <textarea cols="7" rows="7" class="form-control" name="textareaInput"value={formData.textareaInput} onChange={handleChange} placeholder="Enter your Bio" />
           </div>
            {/* A ternary is used by the button here to display update or create , dependning
            on if the formData.id is present or not. */}
           <button type="submit"> {formData.id ? "Update" : "Create" } </button> 
        </form>
        <ul>
        {items.map((item)=>(
                <li key={item.id}>
                    { item.textInput}
                    <button onClick={()=>handleEdit(item.id)}> Edit </button>
                    <button onClick={()=>handleDelete(item.id)} class="red">Delete </button> 

                </li>
            ))}
        
        </ul>
    </div>
    </>

   )

}

export default Form 