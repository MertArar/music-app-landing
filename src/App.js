import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Search from "./components/Search";
import Donwload from "./components/Donwload";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App text-white">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Donwload />
      <Footer />
    </div>
  );
}

export default App;
