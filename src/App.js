import React, { useEffect, useState } from "react";
import "./App.css";
import FormValidation from "./FormValidation";
import Eff from "./Eff";
import { Put } from "./Put";
import { Read } from "./Read";
import { ReadId } from "./ReadId";
import {Insert} from "./Insert"
import Delete from './Delete';
import UpdateAPI from './UpdateAPI';
import { Form, Route, Routes} from "react-router-dom";
import Navbar from "./router/Navbar";
import Contact from "./router/Contact";
import Home from "./router/Home";
import NoMatch from "./router/NoMatch";
import axios from "axios";
import {Parent} from "./Parent";
import JobForm from "./DashboardExperiments/JobForm";
import { AssessmentDiv} from "./DashboardExperiments/AssessmentDiv";
import { Button } from "@mui/base";
import { StyledLearning } from "./StyledLearning";

function App(props) {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  //using promises
  // useEffect(() => {
  //   axios
  //     .get(" https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://localhost:7179/api/Books");
      setMyData(res.data);
    } catch (error) {
      setIsError(error);
    }
  };

  //using async await
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
    {/* <Navbar/> */}

    {/* <Routes>
    <Route path = "" element = {<Read/>} />
    <Route path = "/readid" element = {<ReadId/>} />
    <Route path = "/update" element = {<UpdateAPI/>} />
     <Route path = "/delete" element = {<Delete/>} />
      <Route path = "/insert" element = {<Insert/>} />
      <Route path = "*" element = {<NoMatch/>} />
    </Routes> */}
    {/* <AssessmentDiv/> */}
    <StyledLearning />
    </>
  );
}

export default App;
