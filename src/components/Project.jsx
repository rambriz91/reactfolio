export default function Project(props) {
  const projects = props.data;
  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <a href={project.href}>
            <img src={project.src} alt={project.alt} />
          </a>
          <a href={project.repo}>
            <img
              src='src/assets/images/github-mark-white.png'
              alt='github octocat'
            />
          </a>
        </div>
      ))}
    </>
  );
}
