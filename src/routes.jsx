import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";

function View() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/blogs/:id"><BlogDetails /></Route>
    </Routes>
  );
}

export default View;
