import React from 'react'

function Loginform(props) {
    console.log("Loginform props", props);
  return (
   <>
    <h1>Login data</h1>
    <p>Username: {props.formname}</p>
    <p>Password: {props.formpassword}</p>
    </>
  )
}

export default Loginform