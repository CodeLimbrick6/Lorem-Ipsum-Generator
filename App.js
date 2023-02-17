import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Text from "./Text";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
const [paragraphs, setParagraphs] = useState(0);
const [text, setText] = useState("");

const handleParagraphs = (e) => {
setParagraphs(e.target.value);
};

const handleGenerate = () => {
const text = Text.slice(0, paragraphs).join("\n");
setText(text);
};

return (
<div className="container mt-5">
<h1 className="header text-center mb-5">Lorem Ipsum Generator</h1>
<section className="input d-flex justify-content-center">
<div className="form-group mr-3">
<p className="text-muted">Paragraphs:</p>
<input
         type="number"
         className="form-control"
         value={paragraphs}
         onChange={handleParagraphs}
       />
</div>
<button className="btn btn-primary" onClick={handleGenerate}>
Generate
</button>
</section>
<section className="output mt-5">
{text.split("\n").map((paragraph, index) => (
<React.Fragment key={index}>
<p>{paragraph}</p>
<br />
</React.Fragment>
))}
</section>
</div>
);
}




