import Theme from "./Theme";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home/Home";

import SignIn from "./components/SignIn"

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Theme>
      <div className="App">
        <Header />
        <Home/>
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
