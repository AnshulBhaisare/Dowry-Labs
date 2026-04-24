import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Learn from "./pages/Learn";
import Laws from "./pages/Laws";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import Regional from "./pages/Regional";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/laws" element={<Laws />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/regional" element={<Regional />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;