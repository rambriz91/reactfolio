import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
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
