import React, {useState} from 'react'

export default function TextForm(props) {



    const handleUpClick = ()=>{
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        console.log("Clear was clicked text.toLowerCase()d was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text was Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value);
    
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
        
    }


    const [text, setText] = useState('');
    return (
        <>
        <div className="Container" style={{color:  props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:  props.mode === 'dark' ? '#13466e' : 'white' , color:  props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Click</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        
        </div>
        <div className="container my-3"  style={{color:  props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}