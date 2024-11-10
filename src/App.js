import { LanguageProvider } from '../src/components/LanguageContext';

import Nav from "../src/components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {

  if (window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
  } else {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    }
  }

  return (
    <LanguageProvider>
      <div className="App" id="section-0">
        
        <Nav/>
        <div>
          <Home/>
        </div>

        <div id="section-1" style={{ height: "100vh"}}>
          <About/>
        </div>

        <div id="section-2">
          <Contact />
        </div>

      </div>
    </LanguageProvider>
    
  );
}

export default App;

