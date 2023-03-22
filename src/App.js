import logo from "./logo.svg";
import Theme from "./Theme";
import Hero from "./components/Hero/Hero";
import "./App.css";
function App() {
  return (
    <Theme>
      <div className="App">
       <Hero hero='About Us'></Hero>
      </div>
    </Theme>
  );
}

export default App;
