import Navigation from './Navigation';

function Header() {
  //renders Navigation tabs within the header component.
  return (
    <header>
      <img
        src='src/assets/images/name-text.png'
        alt='Stylized Text Rob Ambriz'
      />
      <Navigation />
    </header>
  );
}

export default Header;
