// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";

// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Payment from "./components/Payment";

// const App = () => {
//   return (
//     <div className="overflow-hidden">
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/product/:id" element={<ProductDetails />}></Route>
//                     <Route path="/Payment" element={<Payment />} />

//         </Routes>
//         <Sidebar />
//         <Footer />
//       </Router>
//     </div>
//   );
// };


// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Payment from "./components/Payment";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
};

export default App;
