import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import Donate from "./Components/Donate/Donate";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Donate" element={<Donate />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
