import React , {useState} from 'react'


const GradingForm=({onGradeSubmit})=>{ //We got the onGradeSubmit as a prop and its a function 
    const [student,setStudent]=useState('')
    const [grade,setGrade]=useState('')   

   const  handleSubmit=(e)=>{
        e.preventDefault()
        onGradeSubmit({student,grade}); //It collects the student and its grade
        setStudent('')
        setGrade('')



    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Enter your Name"
                value={student}
                onChange={(e)=>setStudent(e.target.value)} 
                />
                <input type="text"
                placeholder="Grade"
                value={grade}
                onChange={(e)=>setGrade(e.target.value)}

                />
                <button type="submit"> Submit Details </button> 

            </form>
        </>
    )
}

export const GradingSummary=({grades})=>{

    return(
        <div className="summary">
            <h5> Grades Summary </h5>
            <ul>
                {grades.map((grade,index)=>
                <li key={index}>
                    {grade.student} :{grade.grade}

                </li>)}
            </ul>
        </div>
    )

}


function Grade(){
    const[grades,setGrades]=useState([])

    const handleGradeSubmit=()=>{
        setGrades([...grades,grades])
    }
    return(
        <>
         <GradingForm onGradeSubmit={handleGradeSubmit} />

{grades.length>0 &&(
   
    <GradingSummary grades={grades} />
  
)}

        </>
        
//If there are grades, lets display, if not lets not
        //We first of all show the form here and pass the function that stores the grades too
       

    )
}

export default Grade 