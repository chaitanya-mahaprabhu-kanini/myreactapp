import React from "react";

const Alpha = () => {
    const shoot = () =>{
        alert("Hi Chaitanya here!")
    }
    return (
        <button class = "btn btn-primary btn-lg" onClick={shoot}>Click Me!</button>
    )
}

export default Alpha;