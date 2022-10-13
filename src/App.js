import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

// let name="dEVANSh";
function App() {
  return (
    <>
    <Navbar title="My Web App" home="HOME" />
    {/* <Navbar/> */}
    <div className='container my-3'>
      <TextForm heading="Enter the text to analyze below" />
      <About/>
    </div>
    </>
  );
}

export default App;
