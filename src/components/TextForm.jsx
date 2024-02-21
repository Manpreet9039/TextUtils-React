import React, { useState } from 'react'


const TextForm = (props) => {

  const [text, setText] = useState("")

  const handleUpClick = ()=>{
    // console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  }

  const handleClear = () => {
    let newText = ''; // Use an empty string to clear the text area
    setText(newText);
    props.showAlert("Text cleared", "success")
  }



  const handleOnChange =(event) =>{
    // console.log(event.target.value);
    setText(event.target.value)
  }

  

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
              
          </div>
          <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={handleLoClick} >Convert to Lowercase</button>
          <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
      </div>
      <div className='container my-3 ' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}

export default TextForm
