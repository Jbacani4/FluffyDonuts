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
    <div className="App" id="AppContainer">
      
      <Nav/>
      <div id="HOME">
        <Home/>
      </div>

      <div id="ABOUT" style={{ height: "100vh"}}>
        <About/>
      </div>

      <div id="CONTACT">
        <Contact />
      </div>

    </div>
  );
}

export default App;

