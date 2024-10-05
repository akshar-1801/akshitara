import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Quiz from "./components/Quiz/Quiz";
import AppContext from "./utils/context";
import Consulting from "./components/Consulting/Consulting";
import BlogPage from "./components/BlogPage/BlogPage";
import BlogDetails from "./components/BlogDetails/BlogDetails";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:cname" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/test" element={<Quiz />} />
        <Route path="/consulting" element={<Consulting/>}/>
        <Route path="/blogs" element={<BlogPage/>}/>
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
      {location.pathname !== "/test" && <Newsletter /> }
      {location.pathname !== "/test" && <Footer /> }
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <AppContent />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
