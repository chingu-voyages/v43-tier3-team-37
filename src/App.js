import Theme from "./Theme";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home/Home";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Theme>
      <div className="App">
        <Home/>
        <Header />
        <Home/>
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
