import Project from '../components/Project';
import data from '../assets/data/project-data';

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <Project data ={data}/>
    </>
  );
}
