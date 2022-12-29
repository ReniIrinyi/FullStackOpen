
const App = () => {

const course = {
  name: "Half Stack application developement",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};


const name = course.parts.map((part) => part.name).join(", ");
const amount = course.parts
  .map((part) => part.exercises)
  .reduce((curr, acc, i, arr) => {
    return acc + curr;
  });

  

const Header = () => {
  return (
    <div>
      <h1>Course Name: {course.name}</h1>
    </div>
  );
};
const Content = () => {
  return (
    <div>
      <h2>Exercises: {name}</h2>
    </div>
  );
};
const Total = () => {
  return <div>Amount of Exercises: {amount}</div>;
};




return (
  <div>
    <Header></Header>
    <Content></Content>
    <Total></Total>
  </div>
);
};
export default App;


