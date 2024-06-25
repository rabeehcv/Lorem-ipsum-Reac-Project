import React,{useState} from 'react';
import data from './data';

function App(){
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello World");
  }
  return(
    <section className="section-center">
      <h3>Lorem Ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type="submit" className="btn">Generate</button>
      </form>
    </section>
  )
}

export default App;