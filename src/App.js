import './App.css';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <HeroSection />
        <Features />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
