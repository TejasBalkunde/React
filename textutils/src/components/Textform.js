import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () =>
    {
        //console.log("Uppercase was clicked"  + text);
        let newtxt = text.toUpperCase();
        setText(newtxt);
    }
    const handleOnChnage = (event) =>
    {
        //console.log("On Chnage");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text here");

    //text = "Newtext"; //weong way to change the state
    //setText("Newtext"); //correct way to change the state

  return (
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" onChange={handleOnChnage} value =  {text} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase </button>
    </div>
  )
}
