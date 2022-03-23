import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./Themes/Default";
import Donation from "./Components/Donation/Donation";
import Overons from "./Components/Overons/Overons";
import Home from "./Components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
  <ThemeProvider theme={mainTheme}>
    <Router>
      <Layout>
        <Route exact path="/"><Home/></Route>
        <Route path="/Overons"><Overons/></Route>
        <Route path="/donation"><Donation/></Route>
      </Layout>
    </Router>
  </ThemeProvider>);
}

export default App;