import {useEffect, useState} from 'react';
import "./Eff.css";
const Eff = () => {
   const greet = `Hello There!`;
   const [text, setText] = useState("");
   const [hov, setHov] = useState(false);
   useEffect(() => {
    console.log("Every Render!");
   }, []);

   useEffect(() => {
    console.log("First Render!");
   });

   useEffect(() => {
    console.log("I am rendered again!");

    return(() => {console.log('Unmount!')});
   }, [hov]);

   return (
    <>
        <div id = "encompass" onClick = {(event) => {setHov(true); setTimeout(() => (setHov(false)), 1000)}} style = {{background: hov ? "blue" : "steelblue"}}> 

        <input type = "text" value = {text} onChange = {(event) => {setText(event.target.value)}}/>

        </div>
    </>
   ); 
}

export default Eff;