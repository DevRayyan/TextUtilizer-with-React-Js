import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const UpperCase = () => {
    let NewText = text.toUpperCase();
    setText(NewText);
  props.showalert("Text Transform to uppercase","primary")

  };

  const LowerCase = () => {
    let NewText = text.toLowerCase();
    setText(NewText);
  props.showalert("Text Transform to Lowercase","primary")

  };

  const Capitalize = () => {
    // const lower = text.toLowerCase();
    // let NewText = lower.charAt(0).toUpperCase() + lower.slice(1)
    //  setText(NewText );
    // props.showalert("Text Transform to Capitalize","primary")
    // let NewText = text.toLowerCase();
    // setText(NewText);

  };

  const HandleOnChange = (e) => {
    setText(e.target.value);
  };

  const Clear = () => {
    setText("");
  props.showalert("All Text Cleared","danger")

  };

  const copy = () => {
    navigator.clipboard.writeText(text);
  props.showalert("copied To Clipboard","success")

  };

  const Extraspace = () => {
    let NewText = text.split(/[ ]+/);
    setText(NewText.join(" "));
  props.showalert("All Extra spaces has been removed","primary")

  };

  return (
    <div className="container  my-4">
      <h1 className={`fw-normal text-${props.mode === "dark" ? "light" : "dark"}`}>
        {props.heading}
      </h1>
      <textarea
        value={text}
        onChange={HandleOnChange}
        className={`border border-${
          props.mode === "dark" ? "dark" : "muted"
        } border-bottom-0 col-10 form-control  rounded-0 bg-${
          props.mode
        } text-${props.mode === "dark" ? "light" : "dark"}`}
        rows="15"
      ></textarea>
      <div
        className={`styles border border-${
          props.mode === "dark" ? "dark" : "muted"
        } text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <button
          className={`btn text-${props.mode === "dark" ? "light" : "dark"}`}
          onClick={UpperCase}
        >
          <i className="fa-solid fa-a"></i>
        </button>
        <button
          className={`btn fw-bold text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={LowerCase}
        >
          a
        </button>
        {/* <button
          className={`btn fw-bold text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={Capitalize}
        >
          Aa
        </button> */}

        <button
          onClick={Clear}
          className={`btn float-end fs-7 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Clear All
        </button>
        <button
          onClick={copy}
          className={`float-end btn fs-7 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Copy
        </button>
        <button
          onClick={Extraspace}
          className={`float-end btn fs-7 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Remove Extra Space
        </button>
      </div>

      <div
        className={`mt-5 d-flex flex-wrap mt-sm-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <div className={` ms-3 mt-3 mt-sm-0 p-2 px-3 bg-${props.mode}`}>
          <span className="">words</span>: {text.split(" ").filter((element)=>{return element.length !== 0 }).length}
        </div>
        <div className={` ms-3 mt-3 mt-sm-0 p-2 px-3 bg-${props.mode}`}>
          <span className="">Characters</span>: {text.length}
        </div>
        <div className={` ms-3 mt-3 mt-sm-0 p-2 px-3 bg-${props.mode}`}>
          <span className="">Read time</span>: {60* 0.008 * text.split(" ").filter((element)=>{return element.length !== 0 }).length} sec
        </div>
      </div>
      <p
        className={`mb-0 pb-0 fs-5 mt-3 fw-normal text-${
          props.mode === "dark" ? "light" : "dark"
        } `}
      >
        Text Preview
      </p>
      <div
        className={` ps-2  bg-${props.mode} text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <p className="text-muted">{text.length>0?text:"Enter the text in the textbox above to preview it"}</p>
      </div>
    </div>
  );
}
