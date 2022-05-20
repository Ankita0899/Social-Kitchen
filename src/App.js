import './App.css';
import About from './Component/About';
import Chef from './Component/Chef';
import Copyright from './Component/Copyright';
import Footer from './Component/Footer';
import Gallery from './Component/Gallery';
import Menu from './Component/Menu';
import Navbar from './Component/Navbar';
import Reservation from './Component/Reservation';
import Review from './Component/Review';

function App() {
  return (
    <>
    <Navbar/>
  <About/>
  <Menu/>
  <Chef/>
  <Gallery/>
  <Review/>
  <Footer/>
  <Copyright/>
  <Reservation/>
    </>
  );
}

export default App;
