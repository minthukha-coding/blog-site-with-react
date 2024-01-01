import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./Components/Create";

function View() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
    </Routes>
  );
}

export default View