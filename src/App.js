import "./App.css";
import NavbarWhite from "./Components/Navbar-white/NavbarWhite";
import NavbarBlue from "./Components/Nabar-blue/NavbarBlue";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from "./Pages/Home";
import Modules from "./Pages/Modules";
import Instructors from "./Pages/Instructors";
import PythonLoops from "./Components/PagesModules/PythonLoops";
import Assignment from "./Components/PagesModules/Assignment";
import Quiz from "./Components/PagesModules/Quiz";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <NavbarWhite />
        <NavbarBlue />
      </div>

      <Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/modules' element={<Modules />}>
            <Route path='PythonLoops' element={<PythonLoops />} />
            <Route path='Assignment' element={<Assignment />} />
            <Route path='Quiz' element={<Quiz />} />
          </Route>
          <Route path='/instructors' element={<Instructors />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
