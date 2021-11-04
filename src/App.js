import './styles/App.css';
import Navbar from './components/Navbar';
import AboutPage from './components/pages/About';
import ContactPage from './components/pages/Contact';

// create simple about component
// create simple contact us component

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <h1>Lets router react</h1>
        <AboutPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
