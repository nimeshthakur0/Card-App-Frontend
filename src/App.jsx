import { useState } from 'react'
import './App.css'

function App() {

  const [cards, setCards] = useState([
    {
      name: "Nimesh Thakur",
      designation: "A student in VIT",
      interest1: "Web Development",
      interest2: "Startup"
    }
  ]);

  return (
    <div>
      <Create cards = {cards} setCards = {setCards}></Create>
      {cards.map(function(card){
        return <Card name = {card.name} designation = {card.designation} interest1 = {card.interest1} interest2 = {card.interest2} ></Card>
      })}
    </div>
  )
}

function Create(props){

  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [interest1, setInterest1] = useState("");
  const [interest2, setInterest2] = useState("");

  return <div>
    <input type = "text" placeholder = "Enter your name" onChange={function(e){
      setName(e.target.value)
    }}/> <br/> <br/>
    <input type = "text" placeholder= "Tell your designation" onChange={function(e){
      setDes(e.target.value)
    }}></input> <br/> <br/>
    <input type = "text" placeholder= "Tell your 1st interest" onChange={function(e){
      setInterest1(e.target.value)
    }}></input> <br/> <br/>
    <input type = "text" placeholder= "Tell your 2nd interest" onChange={function(e){
      setInterest2(e.target.value)
    }}></input> <br/> <br/>
    <button onClick={() => {
      const newCard = {
        name,
        designation: des,
        interest1,
        interest2
      }
      props.setCards([...props.cards, newCard]);
    }}>Submit</button> <br/> <br/>
  </div>
}

function Card(props){

  return <div style = {{border: 1, borderStyle: "solid", padding: 20}}>
    <h1>{props.name}</h1>
    <p>{props.designation}</p>
    <h2>Interests</h2>
    <ul>
      <li>{props.interest1}</li>
      <li>{props.interest2}</li>
      <li>Open Source</li>
    </ul>

    <button style={{margin: 10, padding: 8, borderRadius: 5, backgroundColor: "#24a0ed"}}>LinkedIn</button>
    <button style={{margin: 10, padding: 8, borderRadius: 5, backgroundColor: "#24a0ed"}}>Twitter</button>
  </div>
  
}

export default App
