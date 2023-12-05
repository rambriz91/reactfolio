export default function Project(props) {
  const projects = props.data;
  //maps through data from props passed through the portfolio page and renders a <div> for each.
  return (
    <>
      <section>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <a href={project.href}>
              <img
                src={project.src}
                alt={project.alt}
                className='project-img'
              />
            </a>
            <a href={project.repo}>
              <img
                src='/images/github-mark-white.png'
                alt='github octocat'
                className='octo-cat'
              />
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
