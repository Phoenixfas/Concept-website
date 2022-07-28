import "./styles/App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="container">
      <div className="scroll__element">
        <Home />
      </div>
      <div className="scroll__element">
        <Explore />
      </div>
      <div className="scroll__element">
        <Trending />
      </div>
      <div className="scroll__element">
        <Contact />
      </div>
      <div className="scroll__element">
        <Footer />
      </div>
    </div>
  );
}

export default App;
