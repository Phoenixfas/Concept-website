import "./styles/App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";

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
    </div>
  );
}

export default App;
