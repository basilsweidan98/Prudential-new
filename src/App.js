import './App.css';
import Upperside from './components/Upperside';
import Lifeexpectancy from './components/Lifeexpectancy';
import Usecasecontainer from './components/Usecasecontainer';
import Ourproduct from './components/Ourproduct';
import Products from './components/Products';
import Foundationcotainer from './components/Foundationcotainer';
import Codecontainer from './components/Codecontainer';
import Percentagecontainer from './components/Percentagecontainer';
import Readycontainer from './components/Readycontainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className=" flex flex-col  bg-[url('images/image3.png')] bg-slate-700  bg-cover">
        <Navbar  />
        <Upperside />
      </div>

      <div className='container mx-auto '>
        <Lifeexpectancy />
        <Usecasecontainer />
        <Ourproduct />
        <Products />
        <Foundationcotainer />
        <Codecontainer />
        <Percentagecontainer />
        <Readycontainer />
        <Footer />

      </div>
    </>
  );
}

export default App;
