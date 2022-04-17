import './App.css';
import Intro from './comp/Intro';
import About from './comp/About';
import Experience from './comp/Experience';

function App() {
  return (
    <div className="app">
      <div className="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
