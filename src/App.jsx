import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./assets/pages/Home";
import Offer from "./assets/pages/Offer";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/SignUp";
import Publish from "./assets/pages/Publish";

// Components
import Header from "./assets/components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);
  const [title, setTitle] = useState("");

  const handleConnexionStatus = (token) => {
    if (token === null) {
      Cookies.remove("vinted-token");
    } else {
      Cookies.set("vinted-token", token, { expires: 14 });
    }
    setToken(token);
  };

  return (
    <Router>
      <Header
        token={token}
        handleConnexionStatus={handleConnexionStatus}
        title={title}
        setTitle={setTitle}
      />
      <Routes>
        <Route path="/" element={<Home title={title} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup handleConnexionStatus={handleConnexionStatus} />}
        />
        <Route
          path="/login"
          element={<Login handleConnexionStatus={handleConnexionStatus} />}
        />
        <Route path="/publish" element={<Publish token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
