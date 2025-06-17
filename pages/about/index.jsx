import Loginform from '@/components/form/Loginform'
import React from 'react'
import {useState} from "react"
function index() {
    const [name, setName] = useState("");
      console.log("name", name);
      const [password, setPassword] = useState("")
      console.log("password", password);
      const [email, setEmail] = useState("");
      console.log("email", email);
      const [submit, setSubmit] = useState("");
      console.log("submit", submit);
      
      function handleName(event) {
      setName(event.target.value)
       }
      function handlePass(event) {
      setPassword(event.target.value)
       }
      function handleEmail(event){
       setEmail(event.target.value)
       }
       function handleSubmit() {
         if(password.length<8){
          alert("Warning! More than 8 characters required")
          return;
        }
        else{
          alert("Success")
        }
    }
  return (
    <>
    <p> Enter your name:</p>
    <input type='text' onChange={handleName} />
     <p> Enter your password:</p>
     <input type='password' onChange={handlePass} />
    <p> Enter your email:</p>
     <input type='text' onChange={handleEmail}/>
     <button onClick={handleSubmit}>Submit</button>
     <Loginform formname={name} formpassword={password}/>
    </>
  )
}

export default index