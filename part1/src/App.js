import { useState } from 'react'

const Statistics = (props) => {
  let feedback = props.good + props.neutral + props.bad
  
  if (feedback) {
    return (
      <div>
        <p>All:  {props.good + props.neutral + props.bad}</p>
        <p>Average:  {(props.good + (props.bad*-1)) / (props.good + props.neutral + props.bad)}</p>
        <p>Positive:  {props.good / (props.good + props.neutral + props.bad)}</p>
      </div>)
  } 
  else 
  {
    return (<div><p>Todavia kein feedback.</p></div>)
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>

      <h1>Geben sie feedback, bitte!</h1>

      <button onClick={handleGoodClick}>
        good
      </button>

      <button onClick={handleNeutralClick}>
        neutral
      </button>

      <button onClick={handleBadClick}>
        bad
      </button>

      <h1>Achtung, hier sind Statistiks!</h1>
      <p>Good:  {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad:  {bad}</p>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
