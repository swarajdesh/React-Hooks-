import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
    const renders = useRef(0);
    const [count, setCount] = useState(() => 
    JSON.parse(localStorage.getItem("count"))
  );

  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  

  const [rect,setRect] = useState({})
  const divRef = useRef();

  useLayoutEffect(() => {
      setRect(divRef.current.getBoundingClientRect());
  }, [data])
    
    // console.log("hello renders: ", renders.current++);
    
    // React.useEffect(() => {
    //     console.log("render");

    //     return () => {
    //         console.log("unmount");
    //     };
    // }, []);

    return (
    <div>
        <div style={{ display: "flex"}}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
        </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>  
      <div>count: {count}</div>
      <button 
      onClick={() => 
      setCount(c => c + 1)}>increment
      </button> 
    </div>
    )
};  