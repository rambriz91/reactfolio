export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <section>
        <form>
          <div>
            <div>
              <div>
                <h3>Name</h3>
                <input type='text' />
              </div>
              <div>
                <h3>Message</h3>
                <textarea type='text' />
              </div>
              <div>
                <button type='submit'>submit</button>
              </div>
            </div>
          </div>
        </form>

        <ul className='contact-list'>
          <li>
            <a href='https://github.com/rambriz91'>
              <img
                src='src/assets/images/github-mark-white.png'
                alt='Octocat logo'
                className='logo'
              />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/sans_armour/'>
              <img
                src='src/assets/images/Instagram_Glyph_White.png'
                alt='instagram logo'
                className='logo'
              />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/robert-ambriz-59281493/'>
              <img
                src='src/assets/images/icons8-linkedin-500.png'
                alt='LinkedIn Logo'
                className='logo'
              />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
