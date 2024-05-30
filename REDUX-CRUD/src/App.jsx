import React from "react";
import DisplayUsers from "./page/DisplayUsers";
import { Route, Routes } from "react-router-dom";
import Update from "./page/Update";
import CreateUser from "./page/CreateUser";
function App() {
  return (
    <Routes>
      <Route path="/"  element={<DisplayUsers/>}/>
      <Route path="/update-user-data" element={<Update/>} />
      <Route  path="/createnewuser" element={<CreateUser/>} />
    </Routes>
     
    
  );
}

export default App;
