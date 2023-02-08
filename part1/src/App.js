import { useState } from 'react'

const Button = (props) => { return ( <button onClick={props.handleClick}>{props.text}</button> ) }

const Text = (props) => { return ( <p>{props.text}</p> ) }

const Header = (props) => { return ( <h1>{props.text}</h1> ) }

let maxval = 0
let maxselect = 0

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const startingpoint = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(startingpoint)

  const handleAnecdote = () => { setSelected(Math.random() * anecdotes.length | 0) }

  const handlePoints = () => { 
    const copy = [...points]
    copy[selected] += 1

    if (copy[selected] > maxval) {
      maxval = copy[selected]
      maxselect = selected
    }

    setPoints(copy)
  }  

  return (
    <div>
      <Header text={"Anecdote of the day"}/>
      <Text text={ anecdotes[selected] }/>
      <Text text={ points[selected] + " votes" }/>

      <Button text={ "upvote this" } handleClick={ handlePoints }/>
      <Button text={ "next anecdote" } handleClick={ handleAnecdote } />

      <Header text={"Anecdote with the most votes"}/>
      <Text text={ anecdotes[maxselect] }/>
    </div>
  )
}

export default App
