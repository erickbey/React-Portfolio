import './App.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import About from './component/About/About';
import Experience from './component/Experience/Experience';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
