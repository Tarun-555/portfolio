import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import About from "./containers/About";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
