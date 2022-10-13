import React, { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");
    // text="new text"; //wrong way to change the state
    // setText("new text"); //correct way to change state

    const handleUpClick = () => {
        // console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const handleClearText = () => {
        let newText = "";
        setText(newText);
    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    };


    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };


    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger mx-1" onClick={handleClearText}>Clear text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
