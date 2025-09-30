/**
 * App Component
 * The root component of the application.
 * Renders the main sections: Navbar, Hero, FeaturedWorks, WorkTogether, ContactForm, and Thanks footer.
 */

import Navbar from "./Navbar";
import Hero from "./Hero";
import Thanks from "./Thanks";
import FeaturedWorks from "./FeaturedWorks";
import WorkTogether from "./WorkTogether";
import ContactForm from "./ContactForm";

/**
 * Main App component
 * Wraps the page sections and layout.
 */
const App: React.FC = () => {
  return (
    <div className="app">
      {/* HEADER SECTION */}
      <header>
        <Navbar />
        <Hero />
      </header>

      {/* MAIN SECTIONS */}
      <FeaturedWorks />
      <WorkTogether />
      <ContactForm />

      {/* FOOTER SECTION */}
      <footer>
        <Thanks />
      </footer>
    </div>
  );
};

export default App;
/**
 * Exporting App as default for use in main entry point.
 */
