import React from "react";
import { Form } from "react-router-dom";
import ViewData from "./ViewData";
import AddEditForm from "./AddEditForm";

const Component1=()=>{
    return(
       <div>
        <AddEditForm />
      <br />

      <ViewData />
       </div>
    )
}


export default Component1;