import {Routes, Route} from "react-router-dom";

import {Home} from "../pages/Home";
import {Details} from "../pages/Details";
import {Update} from "../pages/Update";
import {Create} from "../pages/Create";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/new" element={<Create/>}/>
    </Routes>
  )
}