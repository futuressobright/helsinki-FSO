const Course = (props) => {

return (
  <div>
    <h2>{props.course.name}</h2>
    {props.course.parts.map(x => 
          <Chapter key={x.id} course={x} />
    )}
  </div>
  )}



const Chapter = (props) => {
  console.log(props)

  return (
    <div>
      <p>{props.course.name} {props.course.exercises}</p>
    </div>
  )};

export default Course
