import { useEffect, useState } from "react";
import {Parent} from './Parent';
const Child = (props) => {
    const a = "Child!";
        useEffect(() => {props.box(2);}, []);
    return(
        <>
        </>
    );
}

export {Child};