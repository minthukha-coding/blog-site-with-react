import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import BlogDetails from './Components/BlogDetails'
import NotFound from "./Components/NotFound";

function View() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default View