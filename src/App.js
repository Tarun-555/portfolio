import './App.css';
import React from 'react';
// import Carousel from './components/Carousel';
const Header = React.lazy(() => import('./components/Header'));
const LandingPage = React.lazy(() => import('./components/LandingPage'));
const About = React.lazy(() => import('./containers/About'));
const Works = React.lazy(() => import('./containers/Works'));

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
