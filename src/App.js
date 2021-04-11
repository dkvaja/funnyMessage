import React, { useState } from "react";

const App = () => {
  let red = "red";
  let name = "Click Me";
  const [bname,ubname] = useState(name);
 const [bg,ngb] = useState("white");
  const changeBg = () =>
  {
    ngb('red');
    ubname('Aey Loda 😠')
  }
  const changedbg = () =>
  {
    ngb("orange");
    ubname("Pikina Rene! 😠");
  }

  return (
    <>
      <div className="box" style={{ backgroundColor : bg}}>
        <button className="btn" onClick={changeBg} onDoubleClick={changedbg}>{bname}</button>
      </div>
    </>
  );
};

export default App;
