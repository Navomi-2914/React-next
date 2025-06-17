import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect , useState } from "react"
import axios from "axios";  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    async function createdata(){
    const createuser = await axios.post("http://localhost:3001/createData",{
    "name": "John Doe",
    "Place" : "New York",
    "Age": 30
    }) 
    console.log("Respose from server", createuser);
  }
  createdata();
  },[]);

  const [name, setName] = useState("");
  console.log("name", name);
  const [password, setPassword] = useState("");
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
     </>
  );
}