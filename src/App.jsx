import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  //renders header, outlet, and footer. conditionally renders class in name if the path is /Portfolio.
  const currentPage = useLocation().pathname;
  return (
    <>
      <Header />
      <main className={currentPage === '/Portfolio' ? 'beach' : ''}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
