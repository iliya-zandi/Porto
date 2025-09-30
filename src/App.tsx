import Navbar from "./Navbar";
import Hero from "./Hero";
import Thanks from "./Thanks";
import FeaturedWorks from "./FeaturedWorks";
import WorkTogether from "./WorkTogether";
import ContactForm from "./ContactForm";

const App = () => {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Hero />
      </header>

      <FeaturedWorks />
      <WorkTogether />
      <ContactForm />

      <footer>
        <Thanks />
      </footer>
    </div>
  );
};

export default App;
