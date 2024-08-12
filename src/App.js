import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";

function App() {

  if (window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
  } else {
      window.onbeforeunload = function () {
          window.scrollTo(0, 0);
      }
  }

  return (
    <div className="App">
      
      <Nav/>
      <div id="HOME">
        <Home/>
      </div>

      <div id="ABOUT" style={{ height: "100vh"}}>
        ABOUT
      </div>

      <div id="CONTACT">
        <Contact />
      </div>

    </div>
  );
}

export default App;

