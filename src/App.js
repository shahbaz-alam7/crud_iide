import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProductComp from "./components/AddProductComp";
import AllProducts from "./components/AllProducts";
import UpdateProduct from "./components/UpdateProduct";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <Router>
      <div className="container my-4">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element={<AllProducts />} />
              <Route path="/edit/:id" element={<UpdateProduct />} />
              <Route path="add" element={<AddProductComp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
