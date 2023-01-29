const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  const Header = (props) => {
	console.log(props)
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)

  }

  const Content = (props) => {
	console.log(props)
	return (
		<div>
			<p>{props.part}</p>
		</div>
	)
  }

  const Total = (props) => {
	console.log(props)
	return (
		<div>
			<p>{props.exercise}</p>
		</div>
	)
  }


  return (
    <div>
	<Header course={course} />
	<Content part={part1} />
	<Total exercise={exercises1} />
	<Content part={part2} />
	<Total exercise={exercises2} />
	<Content part={part3} />
	<Total exercise={exercises3} />
    </div>
  )
}

export default App
