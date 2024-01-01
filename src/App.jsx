// import "./App.css";
// import Layout from "./layout/index"

// function App() {
//   return (
//     <>
//      <Layout/>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';

function App() {
  return (
    <RouterProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </RouterProvider>
  );
}

export default App;
