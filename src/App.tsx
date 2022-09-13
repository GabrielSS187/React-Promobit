import { StyleGlobal } from "./shared/styles/StyleGlobal";
import axios from "axios";
import { useEffect } from "react";
import { Routers } from "./routes/index";


function App() {

  return (
    <>
      <Routers />
      <StyleGlobal />
    </>
  );
};

export default App;
