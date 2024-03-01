import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () =>
    {
        //console.log("Uppercase was clicked"  + text);
        let newtxt = text.toUpperCase();
        setText(newtxt);
    }
    const handleLoClick = () =>
    {
        //console.log("Uppercase was clicked"  + text);
        let newtxt = text.toLowerCase();
        setText(newtxt);
    }
    const handleOnChnage = (event) =>
    {
        //console.log("On Chnage");
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    //text = "Newtext"; //weong way to change the state
    //setText("Newtext"); //correct way to change the state

  return (
    <>
    <div className='conatiner'>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" onChange={handleOnChnage} value =  {text} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase </button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase </button>
    </div>
    <div className='container my-4'>
      <h2> Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes required to read </p>
      <h2> Preview </h2>
      <p>{text} </p>
    </div>
    </>
  )
}
