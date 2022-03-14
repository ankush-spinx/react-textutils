import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleSmallclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleclearclick = () => {
        setText('');
    }
    const handleCopyClick = () => {
        document.getElementById('myBox').select();
        navigator.clipboard.writeText(text);
    }
    const handleSenClick = () => {
        const newStr = text.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
        setText(newStr);
    }
    const handleToggleClick = () =>{
        const newStr =   text.toUpperCase().split(' ').map(function(word) {
            return (word.charAt(0).toLowerCase() + word.slice(1));
          }).join(' ');
          setText(newStr);
    }
    const handleDownloadClick = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (
    <div>
        <section className="my-5">
            <div className="container">
                <div className='row'>
                    <div className='col-lg-12'>
                    <h1>{props.heading}</h1>
                <div className="col-md-10">
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder='Enter Text Here. . .' ></textarea>
                    </div>
                    <button onClick={handleUpclick} className="btn btn-primary mx-2">UPPERCASE</button>
                    <button onClick={handleSmallclick} className="btn btn-primary mx-2">Lowercase</button>
                    <button onClick={handleSenClick} className="btn btn-primary mx-2">Sentence Case</button>
                    <button onClick={handleToggleClick} className="btn btn-primary mx-2">tOGGLE cASE</button>
                    <button onClick={handleDownloadClick} className="btn btn-primary mx-2">Download Text</button>
                    <button onClick={handleCopyClick} className="btn btn-primary mx-2">Copy</button>
                    <button onClick={handleclearclick} className="btn btn-primary mx-2">Clear</button>
                </div>
                 <div className="col-md-2">
                    <h2>Summary</h2><hr/>
                    <p>Words: { (text.length > 0) ? text.split(" ").length : 0}</p>
                    <p>Charcters: {text.length}</p>
                    <p>Minutes: { (text.length > 0) ? parseFloat(0.008 * text.split(" ").length).toFixed(2) : 0 }</p>
                    <p>Lines: { text.split("\n").length }</p>
                </div>
               
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
