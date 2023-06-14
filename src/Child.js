import { useEffect, useState } from "react";
import {Parent} from './Parent';
const Child = (props) => {
    const a = "Child!";
        props.box(2);
        useEffect(() => {}, []);
    return(
        <>
            <Parent />
        </>
    );
}

export {Child};