import './App.css';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
