import './App.css';
import React from 'react';
// import Carousel from './components/Carousel';
const Header = React.lazy(() =>'./components/Header');
const LandingPage = React.lazy(() =>'./components/LandingPage');
const About = React.lazy(() => './containers/About');
const Works = React.lazy(() => './containers/Works');

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={() => <>loading...</>}>
        <Header />
        <LandingPage />
        <About />
        <Works />
      </React.Suspense>
    </div>
  );
}

export default App;
