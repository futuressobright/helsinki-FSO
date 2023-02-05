import { useState } from 'react'

const Statistics = (props) => {
  let feedback = props.good + props.neutral + props.bad

  if (feedback) {
    return (
      <div>
        <StatisticLine text="Good" value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad" value={props.bad}/>

        <StatisticLine text="All" value={props.good + props.neutral + props.bad}/>
        <StatisticLine text="Average" value={(props.good + (props.bad*-1)) / (props.good + props.neutral + props.bad)}/>
        <StatisticLine text="Positive" value={props.good / (props.good + props.neutral + props.bad)}/>
      </div>)
  } 
  else 
  {
    return (<div><p>Bis jetzt kein feedback.</p></div>)
  }
}

const StatisticLine = (props) => {
  return (
    <p>{props.text}:  {props.value}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good + 1) }
  const handleNeutralClick = () => { setNeutral(neutral + 1) }
  const handleBadClick = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>Geben sie feedback, bitte!</h1>
      <Button text={"good"} handleClick={handleGoodClick} />
      <Button text={"neutral"} handleClick={handleNeutralClick} />
      <Button text={"bad"} handleClick={handleBadClick} />

      <h1>Achtung, hier sind Statistiks!</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
