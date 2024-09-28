import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/Header/Header";
import Frame1 from "./components/Frame1/Frame1";
import Frame2 from "./components/Frame2/Frame2";
import Frame3 from "./components/Frame3/Frame3";
import Frame4 from "./components/Frame4/Frame4";
import Frame5 from "./components/Frame5/Frame5";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Frame1 />} />
          <Route path="/about" element={<Frame2 />} />
          <Route path="/contact" element={<Frame3 />} />
          <Route path="/services" element={<Frame4 />} />
          <Route path="/more-information" element={<Frame5 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
