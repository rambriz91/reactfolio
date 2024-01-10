import Navigation from './Navigation';

function Header() {
  //renders Navigation tabs within the header component.
  return (
    <header>
      <img src='/images/name-text2.png' alt='Stylized Text Rob Ambriz' />
      <Navigation />
    </header>
  );
}

export default Header;
