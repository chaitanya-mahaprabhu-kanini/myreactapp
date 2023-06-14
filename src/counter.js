import { useState } from "react";
import './counter.css';
const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementHandler = (event) => {
        setCounter(counter+1);
    };
    const decrementHandler = (event) => {
        if(counter > 0)
            setCounter(counter-1);
    };
    
    return(
            <div id = "counter">
                <h2>Counter</h2>
                <h1>{counter}</h1>
                <button onClick = {incrementHandler} class = "btn btn-success btn-lg">Increment</button>
                <button onClick = {decrementHandler} class = "btn btn-danger btn-lg">Decrement</button>
            </div>
    );
}

export {Counter};