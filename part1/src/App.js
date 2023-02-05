// 1.6 unicafe step1
import { useState } from 'react'

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
    </div>
  )
}

export default App
