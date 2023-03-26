import Theme from "./Theme";
import "./App.css";

import Home from "./pages/Home";
import { Header, Footer } from "./components";

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
