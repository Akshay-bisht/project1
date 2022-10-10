import React , {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "kaskska"; // wrong way to change the state
    // setText("kaskkks"); // correct way to change the state
    // console.log(useState('Enter text here2'))
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked")
        setText("You have clicked on handleUpClick" + text)
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = ()=>{
        console.log("LowerCase was clicked")
        setText("You have clicked on handleUpClick" + text)
        let newText= text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        console.log("Clear text")
        let newText= "";
        setText(newText)
    }

    const handleCopyText = ()=>{
        console.log("Copy text")
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtrSpaces = ()=>{
        console.log("Remove extra space from text")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        console.log("On Change clicked");
        setText(event.target.value);
    }

    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-danger mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-secondary mx-2" onClick={handleCopyText}>Copy text</button>
            <button className="btn btn-secondary mx-2" onClick={handleExtrSpaces}>Remove extra spaces</button>

        </div>
        <div className="container my-2" >
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} works and {text.length} characters </p>
            <p>{0.008 *text.split(" ").length } minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}
