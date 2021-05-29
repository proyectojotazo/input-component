import React from "react";

const Aside = () => {
  return (
    <aside className="lateral">
      <h1 className="lateral__title">
        <span className="orange">Dev</span>challenges.io
      </h1>
      <div className="wrapper-options">
        <h3 className="wrapper-options__item">Typography</h3>
        <h3 className="wrapper-options__item">Grid</h3> 
        <h3 className="wrapper-options__item">Buttons</h3>
        <h3 className="wrapper-options__item bolder">Inputs</h3>
      </div>
    </aside>
  );
};

export default Aside;
