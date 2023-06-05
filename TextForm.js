import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleOnChange = (e) => {
        console.log("Uppercase was clicked");
        setText(e.target.value);
    }
 
    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared!", "success");
    }

    const handleCopy = ()=> {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Your text has been copied!", "success");
    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed!", "success");
    }

//    const textarea = document.getElementById('myBox');
//    textarea.addEventListener('focus', function() {
//     textarea.text = '';
//    })


    // function wordCount(text) {
    //     var totalSoFar = 0;
    //     for (let i = 0; i < wordCount.length; i++) {
    //         if(text(i) === " "){
    //             totalSoFar = +1;
    //         }     
    //         totalSoFar += 1;       
    //     }
    // }

    const [text, setText] = useState('Enter your text');

    //setText("new text"); // Correct way to change the state 
    return (
        <>
            <div style={{color: props.mode === 'light'? 'black' : 'white'}} className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode === 'light'? 'white' : 'black', color: props.mode === 'light'? 'black' : 'white'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-outline-success mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-outline-success mx-2 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-outline-success mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light'? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((e)=>{return e.length!=0}).length} minutes read</p>
                <h2>Preview</h2>
                <h4><p>{text}</p></h4>
            </div>
        </>
    )
}