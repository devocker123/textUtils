import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("UpperCase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const handleOnChange = (event)=>{
    console.log("Onchange ");
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here');
  //setText("abcd");
  return (
      <div>
        <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox " rows="8"></textarea>
          </div>  
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      </div>
  )
}
