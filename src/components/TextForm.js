import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLowClick = ()=>{
      console.log("LowerCase was clicked"+text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!","success");
  }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
</div>
<div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
</div>
</>
  )
}
