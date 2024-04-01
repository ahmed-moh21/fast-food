import "./App.css";
import NavbarF from "./componants/navBar/Navbar";
import CarouselFade from "./componants/FoodSlid/FoodSlid";
import SearchProduct from "./componants/Search/Searctproduct";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <NavbarF />
      <Routes>
        <Route path="/" element={<CarouselFade />} />
        <Route path="/search" element={<SearchProduct />} />
      </Routes>
    </div>
  );
}

export default App;

/*



      <ProductDetails />

*/
