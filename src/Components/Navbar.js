import React from "react";

export default function Navbar(props) {
  const colorPicker = () => {
let code = document.getElementById('colorcode').value;
  document.body.style.backgroundColor = code;

  };

  return (
    <nav className={`shadow navbar navbar-expand-lg bg-${props.mode} text-${props.mode === "dark"?"light":"dark" }`}>
      <div className="container-fluid">
        <div className="fs-2 ">{props.title}</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2 ms-4 ">{props.home}</li>
          </ul>
          <div className="form-check form-switch">
            <input onClick={props.togglemode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switch"
            />
            <label
              className={`form-check-label  text-${props.mode === "dark"?"light":"dark" }`}
              htmlFor="switch"
            >
              Dark Mode
            </label>
          </div>
          <input id="colorcode"  onChange={colorPicker} type="color" className=" ms-3" />
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  home: "home"
};
