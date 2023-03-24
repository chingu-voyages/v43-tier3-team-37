import logo from "./logo.svg";
import Theme from "./Theme";
import "./App.css";
import Home from "./pages/Home";
function App() {
  return (
    <Theme>
      <div className="App">
        <Home/>
      </div>
    </Theme>
  );
}

export default App;
