import { useState } from 'react'

const Button = ( {onClick, text} ) => <button onClick={onClick}>{text}</button>

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
   
  const [selected, setSelected] = useState(0)

  const [points, setAllPoints] = useState(Array(8).fill(0))

  const random = () => setSelected(Math.floor(Math.random() * 8))

  const vote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setAllPoints(newPoints)
  }

  const Winner = () => {
    const highestVoteCount = Math.max(...points)
    const winnerIndex = points.indexOf(highestVoteCount)
    const winner = anecdotes[winnerIndex]
    if (highestVoteCount === 0) {
      return (
        <p>No votes yet</p>
      )
    }

    return (
      <div>
        <p>{winner}</p>
        <p>has {highestVoteCount} votes</p>
      </div>
    )
  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <br></br>
      {anecdotes[selected]}
      <br></br>
      This quote has {points[selected]} votes
      <Button onClick={vote} text="vote" />
      <Button onClick={random} text="next anecdote" />
      <br></br>

      <h1>Highest voted anecdote</h1>
      <br></br>
      <Winner />
    </div>
  )
}

export default App