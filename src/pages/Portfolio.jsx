import Project from '../components/Project';
import data from '../assets/data/project-data';

export default function Portfolio() {
  //renders projects and passes imported data as a prop to the project component.
  return (
    <>
      <h1>Portfolio</h1>
      <Project data ={data}/>
    </>
  );
}
