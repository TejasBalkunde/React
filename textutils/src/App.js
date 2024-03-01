import Navbar from './components/Navbar';
import './App.css';
// import Textform from './components/Textform';
import About from './components/About';


function App() {
  return (
    <>
{/* <Navbar title = {"TextUtills"} aboutText ="About TextUtills"/> */}
<Navbar title = {"TextUtills"} />
{/* <Navbar/> */}

<div className="container my-3">

{/* <Textform heading = "Enter text to analyse"/> */}

<About/>
</div>

    </>
  );
}

export default App;
