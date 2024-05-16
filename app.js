import React from "react";
import ReactDom from "react-dom";
import { useState } from "react";

// const store=ReactDom.createRoot(document.getElementById("add").innerHTML)

function Parent() {
    const[Value,setValue]=useState(0)
    function increase(){
        setValue(Value+1)
    }
    const dec=()=>{
        if(Value==0){
            setValue(0)
        }
        else{
            setValue(Value-1)
        }
        
    }
    function reset(){
        setValue(0)
    }
  return (
    <div className="main">
      <h1 className="heading">Increament & Decreament</h1>
      <div className="box">
        <h2 id="add">{Value}</h2>
      </div>
      <div className="but">
        <button onClick={dec}>Substract</button>
        <button onClick={increase}>Add</button>
      </div>
      <button onClick={reset}>refresh</button>
    </div>
  );
}

// console.log(parent);
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Parent />);
