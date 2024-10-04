import { useState } from "react"
import "./CareerForm.css"

const CareerForm = () => {

    const [formDetails,setFormDetails] = useState({})

    const changeHandler =(event)=>{
        setFormDetails((prev)=>({...prev,[event.target.name]:event.target.value}))
    }

    const submitForm = (event)=>{
        event.preventDefault()
        console.log(formDetails,"formDetails")
    }
  return (
    <div className="form-container">
      <div>
      <h1 className="section-title">Career</h1>
      <p>Job Opening in IT Company. Apply Now!</p>
      </div>
     
        <form onSubmit={submitForm} className="form">
         
          <input className="input-text" type="text" placeholder="Name" name="name" id="name" onChange={changeHandler} required/>
        
          <input className="input-text" type="text" placeholder="Contact Number" name="contactNumber" id="contactNumber" onChange={changeHandler} required/>
         
          <input className="input-text" type="email" placeholder="Email" name="email" id="email" onChange={changeHandler} required/>
         
           <span>
               <p>Apply For Which Intern?</p> 
          </span>
                
           <div className="form-options-container">
                <span>
                      <input type="radio" name="position" id="position" value={'Web Designer'} onChange={changeHandler} /> 
                        Web Designer
                </span>
                <span>
                      <input type="radio" name="position" id="position" value={'Web Developer'} onChange={changeHandler}/> 
                      Web Developer
                </span>
                <span>
                      <input type="radio" name="position" id="position" value={'Machine Learning'} onChange={changeHandler}/> 
                      Machine Learning
                </span>
                <span>
                    <input type="radio" name="position" id="position" value={'Web Developement'} onChange={changeHandler}/> 
                      Web Developement
                </span>
                <span>
                    <input type="radio" name="position" id="position" value={'Deployment'} onChange={changeHandler}/> 
                     Deployment
                </span>
           </div>
           <input className="input-text" type="text" placeholder="Years of Experience" name="experience" id="experience" onChange={changeHandler} required/>
           <textarea className="input-textarea" type="text" placeholder="Other Details" name="other_detail" id="other_detail" onChange={changeHandler} required/>
           <p>Upload Your Resume</p>
           <input className="resume-btn" type="file" name="resume" id="resume" onChange={changeHandler}/>
           <span><button type="submit" className="submit-btn">Submit</button></span>
        </form>
      
    </div>
  )
}

export default CareerForm
