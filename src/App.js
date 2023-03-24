import logo from "./logo.svg";
import Theme from "./Theme";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home/Home";
import "./App.css";
function App() {
  return (
    <Theme>
      <div className="App">
       {/* <Hero hero='About Us'></Hero> */}
       <Home/>
      </div>
    </Theme>
  );
}

export default App;
