const Course = (props) => {

  var names = props.course.parts.map(x => {
    return <li key = {x.id}>
      {x.name + " " + x.exercises}</li>
  })
  console.log(names)

  return (
    <div>
      <h1>{props.course.name}</h1>
      <ul>
        <p>{names}</p>
      </ul>
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'Lasse Viren',
        exercises: 9,
        id: 4
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
