import Theme from "./Theme";

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
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
