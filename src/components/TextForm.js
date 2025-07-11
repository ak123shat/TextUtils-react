import React,{useState} from 'react'

export default function TextForm(props) {
  const [text , setText] = useState(' ');

  const handleUpClick = ()=> {
      let newtext = text.toUpperCase();
      setText(newtext);
  }

  const handleOnChange = (event)=>{
      setText(event.target.value);
  }
  //lower case
  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleClearClick = ()=>{
    let newtext = " ";
    setText(newtext);
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
  }
  const handleExtraSpaces=()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }

  return (
  <>
    <div className='container'>
    <h1>{props.heading}</h1>
  <div class="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
  <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
  <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
  <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra</button>
    </div>
    <div className='container my-3'>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
</>
)
}
