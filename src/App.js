import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Search from "./components/Search";
import Donwload from "./components/Donwload";

function App() {
  return (
    <div className="App text-white">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Donwload />
    </div>
  );
}

export default App;
