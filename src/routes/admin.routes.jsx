import {Routes, Route, Navigate} from "react-router-dom";

import {Home} from "../pages/Home";
import {Details} from "../pages/Details";
import {Update} from "../pages/Update";
import {Create} from "../pages/Create";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/new" element={<Create/>}/>

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}