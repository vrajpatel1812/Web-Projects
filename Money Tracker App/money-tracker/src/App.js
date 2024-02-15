import './App.css';
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [transactions, setTransation] = useState([]);

  useEffect(() => {
    trasactions().then(setTransation)
  })

  const trasactions = async () => {
    const url = process.env.REACT_APP_URL + '/trasactions';
    const response = await fetch(url);
    return await response.json();
  }

  const handleSubmit = (ev) => {
    if(name === "" || description === "" || date === ""){
      return;
    }
    ev.preventDefault();

    const url = process.env.REACT_APP_URL + '/transaction';
    const price = name.split(" ")[0];

    fetch(url, {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        date
      })
    }).then(response => {
      response.json().then(json => {
        setDate("");
        setDescription("");
        setName("");
        console.log('result', json);
      })
    })
  }

  let balance = 0;
  for(let trasaction of transactions) {
    balance += trasaction.price;
  }

  return (
    <div className="container">
      <div className="main--Container">
        <h1> &#8377;{balance}<span>.00</span></h1>

        <form onSubmit={handleSubmit}>
          <div className="input--Box">
            <input value={name}
              onChange={ev => setName(ev.target.value)}
              placeholder="+200 for by iphone" type="text"></input>
            <input value={date}
              onChange={ev => setDate(ev.target.value)}
              type="date"></input>
          </div>
          <div className="description--Box">
            <input value={description}
              onChange={ev => setDescription(ev.target.value)}
              placeholder="description" type="text"></input>
          </div>
          <button className="add-Button" id="addButton">Add new Trasaction</button>
        </form>

        {/* {transactions.length} */}
        <div className="transactions">
          {transactions.length > 0 && transactions.map(transaction => (
            <div className="transaction">
              <div className="left--box">
                <div className="main--title">{transaction.name}</div>
                <div className="descrition--title">{transaction.description}</div>
              </div>
              <div className="right--box">
                <div className={(transaction.price<0?'red':'green')+"--price"}>&#8377;{transaction.price}</div>
                <div className="date--time">{transaction.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


