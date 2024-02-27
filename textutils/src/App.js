import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';


function App() {
  return (
    <>
{/* <Navbar title = {"TextUtills"} aboutText ="About TextUtills"/> */}
<Navbar title = {"TextUtills"} />
{/* <Navbar/> */}

<div className="container my-3">

<Textform heading = "Enter text to analyse"/>
</div>




    </>
  );
}

export default App;
