import './App.css';
import Intro from './comp/Intro';
import About from './comp/About';
import Experience from './comp/Experience';
import Credits from './comp/Credits';

function App() {
  return (
    <div className="app">
      <div className="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
