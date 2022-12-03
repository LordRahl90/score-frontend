
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Layout from "./views/Layout";
import AllUsers from "./views/AllUsers";
import Create from "./views/Create";
import Details from "./views/Details";


function App() {
  const id = useParams();
  return (
    <div>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AllUsers />} />
            <Route path="create" element={<Create />} />
            <Route path=":id" element={<Details id={id} />} />
          </Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
