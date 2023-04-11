import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Search from "./components/Search";

function App() {
  return (
    <div className="App text-white">
      <Header />
      <Hero />
      <Experience />
      <Search />
    </div>
  );
}

export default App;
