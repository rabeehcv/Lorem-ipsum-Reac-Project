import React,{useState} from 'react';
import data from './data';

function App(){
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count); //convert string type to integer
    if(count<0){
      amount=1;
    }
    if(count>9){
      amount=9;
    }
    setText(data.slice(0,amount));
  }
  return(
    <section className="section-center">
      <h3>Lorem Ipsum (Generate Upto 9 Paragraphs)</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type="submit" className="btn">Generate</button>
      </form>
      {text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </section>
  )
}

export default App;