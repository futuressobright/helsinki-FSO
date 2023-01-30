// React uses C++ style comments

/* C-style comments
   also work!
*/

// Header takes care of rendering the name of the course
const Header = (props) => {
	console.log(props)
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)

}

// Content renders the parts and their number of exercises 
const Content = (props) => {
	console.log(props)
	return (
		<div>
			<p>{props.part} {props.exercises}</p>
		</div>
	)
}

// Total renders the total number of exercises
const Total = (props) => {
	console.log(props)
	return (
		<div>
			<p>{props.exercises}</p>
		</div>
	)
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14



  return (
    <div>
	<Header course={course} />

	<Content part={part1} exercises={exercises1}/>
	<Content part={part2} exercises={exercises2}/>
	<Content part={part3} exercises={exercises3}/>

	<Total exercises={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App
