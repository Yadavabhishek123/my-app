import React from "react";
import CountRender from "./RecoilLib/CountRendor";
import {RecoilRoot} from "recoil" // it is used for wrapping all components that are using recoil

function App() {

  return (
    <>
    <RecoilRoot>
      <CountRender/>
    </RecoilRoot>
    </>
  );
}

export default App
;
