import React, {useEffect,useState,useRef,useLayoutEffect} from "react";
import { Hello } from "./hello";
import { useFetch } from "./useFetch";
import {useForm} from './useForm';

const App = () => {
  // const[values, handleChange] = useForm({email: "", password: ""});
  // const[values2, handleChange2] = useForm({firstName: "", lastName: ""})
  const [values, handleChange] = useForm({email: "", password:"", firstName:""});

  
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
    
  }, [])


  // useEffect(() => {
  //   const onMouseMove = e =>{
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove",onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove",onMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("mount1");
  // }, []);
  // useEffect(() => {
  //   console.log("mount2");
  // }, []);


  return (
    <div>
      {/* <div>{loading ? "loading..." : data} </div> */}
      
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello/>}
      <input ref = {inputRef} 
      name="email" 
      value={values.email} 
      onChange={handleChange}
      />
      <input
      name="firstName"
      placeholder="first name"
      value={values.firstName}
      onChange={handleChange}
      />
      <input 
      type="password" 
      name="password" 
      value={values.password}
      onChange={handleChange}
      />
      <button
      onClick={() => 
        { 
        inputRef.current.focus();
        hello.current();
      }}
      >
        focus
      </button>
    </div>
  );
}

export default App;
