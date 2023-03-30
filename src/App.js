import React from "react";
import Navigation from "./components/Navigation";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default App;
