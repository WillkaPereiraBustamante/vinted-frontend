import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./assets/pages/Home";
import Offer from "./assets/pages/Offer";
import Details from "./assets/pages/Details";

// Components
import Header from "./assets/components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
