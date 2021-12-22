import React from "react";
import { BrowserRouter, Route } from  'react-router-dom';

import Landing from "./pages/Landing";
import TeacherForm from "./pages/TaacherForm";
import TeacherList from "./pages/TeacherList";

function Routes() {
    return(
        
        <BrowserRouter>
        
         <Route path="/study"component={TeacherList}exact/>   
         <Route path="/give-classes"component={TeacherForm}exact/>   
         <Route path="/" component={Landing} exact/>   
        </BrowserRouter>
    );
}
export default Routes; 