import { useState } from "react";
import {Child} from './Child';
const Parent = (props) => {
    const [value, setValue] = useState("");
    const fun = (input) => {
        setValue(input);
    }
    return(
        <>
            <Child box = {fun}/>
            <h1 style = {{color: "red"}}>{value}</h1>
        </>
    );
}

export {Parent};