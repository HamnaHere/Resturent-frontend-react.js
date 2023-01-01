import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  

  const createUser = () => {
    const user = {
      username: username,
      password: password,
      email: email
     
    };
   
    fetch("http://localhost:5000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((info) => console.log("Data Updated", info));
  };
  let Navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/login`; 
    Navigate(path);
  }


  return (
    <div className="Auth-form-container">
      

      <Form className="Auth-form">
        <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>


    
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password Here"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            createUser();
            routeChange()

          }}
        >
          Sign Up
        </Button>
        </div>
      </Form>
      </div>
    
  );


  // const changeSelection = (e)=>{
  //   setGender(e.target.value);
  }

  
export default SignUp;