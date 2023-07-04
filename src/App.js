import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Men from "../src/pages/Men";
import Women from "../src/pages/Women";
import Navbar from "../src/components/Navbar";
import TopBar from "./components/TopBar";
import Midbar from "./components/Midbar";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import ShoppingCart from "./components/ShoppingCart";
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <TopBar />
        <Midbar />
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Men />} />
            <Route path="/women" element={<Women />} />
          </Routes>
        </Container>
        <ShoppingCart />
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
