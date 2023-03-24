import Theme from "./Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Register from "./components/Register";


import "./App.css";
function App() {
  return (
    <Theme>
       <Router>
       
          <Routes>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Routes>
       
      </Router>
    </Theme>
  );
}

export default App;
