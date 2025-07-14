 import React, {useState}  from 'react';
 
 function MyForm(){

const [ formData, setFormData] = useState({
  name :'',
  email :'',
  resumeText: '',
});

const handleChange =(e)=>{
  const{name,value}=e.target;
  setFormData((prev)=>({... prev, [name]:value}));
};

const handleSubmit = async(e)=>{
  e.preventDefault();
  try{
    const res = await fetch("http://localhost:5000/api/submitResume",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData),
      });

    const result = await res.json();
    console.log(result.message);

    setFormData({
      name:'',
      email:'',
      resumeText:'',
    });
  }
  catch (err){
    console.error("submission failed:", err);
  }
};

  return (
 <div> 
    <h1> Hello  Mr. Interviewer</h1>
    <form onSubmit ={handleSubmit}> 
      <label> Enter Your name</label><br />
      <input 
       name ="name" 
       type ="text"
       value ={formData.name}
       onChange ={handleChange}
       /> <br />

      <label> enter your email</label> <br />
      <input
      name ="email"
      type ="email"
      value ={formData.email}
      onChange={handleChange}
      /> <br />

      <label> Job Description</label><br/>
      <textarea
      name ="jd"
      value={formData.jd}
      onChange={handleChange}
      /> <br/>

      <label> Resume</label><br />
      <input
      name ="resume"
      type ="file"
      accept =".pdf, .doc, .docs"
      value ={formData.resumeText}
      onChange={handleChange}
      /><br/>

      <button  type= "submit"> Submit</button>
    </form>
   </div>

  )

 }

 export default MyForm;