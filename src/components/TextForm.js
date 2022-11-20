import React,{useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("I am there");

    const handleOnChange = (event) =>{

        console.log(event)
        setText(event.target.value)
    }

    const onSubmit = () =>{

        setText(text.toUpperCase())

    }

  return (
    <div>
    
    <div className="form-group ">
    <h1>{props.heading}</h1>
    <textarea className="form-control my-3" value={text} style={{background: props.mode == "dark" ? "grey" :"white"}}onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button onClick={onSubmit}>
        PLEASE CLICK ME
    </button>
      <div className="container my-3">
        <h1>
            Your text summary
        </h1>
        <p>
            {text.split("").filter((element)=>  element !=" ").length} characters words and 4532324 
        </p>

      </div>
    </div>
  );
}
