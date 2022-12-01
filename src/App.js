import About from "./components/About";
import Branch from "./components/Branches";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Support from "./components/Support";
import TheFooter from "./components/TheFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Branch />
      <Offers />
      <TheFooter />
    </div>
  );
}

export default App;
