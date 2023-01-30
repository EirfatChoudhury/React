import { useState } from 'react'

const Button = ( {onClick, text} ) => <button onClick={onClick}>{text}</button>

const Statistics = ( {good, neutral, bad} ) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  
  }
  return (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {good + bad + neutral}</p>
    <p>Average: {(good + bad + neutral)/3}</p>
    <p>Positive: {good / (good + bad + neutral) * 100} %</p>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => setGood(good + 1)
  const clickNeutral = () => setNeutral(neutral + 1)
  const clickBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <br></br>
      <Button onClick={clickGood} text="good" />
      <Button onClick={clickNeutral} text="neutral" />
      <Button onClick={clickBad} text="bad" />
      <br></br>

      <h1>Statistics</h1>
      <br></br>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App