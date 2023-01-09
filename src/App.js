import React from "react";

import Routes from "./routes/index";
import GlobalStyles from "./styles/globalStyles";
import Scroll from "./components/scroll/index.jsx";

import "./styles/fontawesome-all.css";
import "./styles/elegant-icons.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
      <Scroll />
    </>
  );
}

export default App;
