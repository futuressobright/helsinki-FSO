const Header = (props) => <h1>{props.certificate.name}</h1>;

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Content = ({ chapters }) => {
  return (
    <div>
      {chapters.map((chapter) => (
        <Part key={chapter.id} part={chapter} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <div>
      <p>
        <strong>
          Total exercises: {parts.reduce((s, p) => s + p.exercises, 0)}
        </strong>
      </p>
    </div>
  );
};

const Course = ({ course }) => (
  <>
    <Header certificate={course.name} />
    <Content chapters={course.parts} />
    <Total parts={course.parts} />
  </>
);

export default Course;
