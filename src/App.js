import Theme from "./Theme";

import SignIn from "./components/SignIn"

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Theme>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
