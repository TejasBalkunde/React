import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
{/* <Navbar title = {"TextUtills"} aboutText ="About TextUtills"/> */}

<Router>
<Navbar title = {"TextUtills"} />
{/* <Navbar/> */}

<div className="container my-3">

<Routes>
  {/* /users --> Component 1 (use exact always for accurate path)
  /users/home ---> component 2 */}
          <Route exact path="/about" element=
          {   <About />}>
      
          </Route>
          <Route exact path="/" element = {<Textform heading = "Enter text to analyse"/>}>
          </Route>
  </Routes>
  </div>
</Router>

    </>
  );
}

export default App;
