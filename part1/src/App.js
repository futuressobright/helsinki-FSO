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


// Total renders the total number of exercises
const Total = (props) => {
	console.log(props)
	return (
		<div>
			<p>{props.exercises}</p>
		</div>
	)
}

/* Refactor the Content component so that it does not render any names of parts or their number of 
   exercises by itself. Instead, it only renders three Part components of which each renders the name 
   and number of exercises of one part.
*/
const Content = (props) => {
	console.log(props)
	return (
		<div>
			<Part part={props.part} exercises={props.exercises}/>			
		</div>
	)
}

const Part = (props) => {
	console.log("In Part woohoo!")
	return (
		<div>
			<p>{props.part} {props.exercises}</p>
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
