const Total = ( {parts} ) => {
    let n = 0
    parts.map(part => n += part.exercises)
    return(
      <p>Total of {n} exercises</p>
    )
  }

export default Total