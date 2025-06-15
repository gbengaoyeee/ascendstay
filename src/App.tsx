import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhyLease from "./components/WhyLease/WhyLease";
import GuaranteedIncome from "./components/GuaranteedIncome/GuaranteedIncome";
import Benefits from "./components/Benefits/Benefits";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <WhyLease />
      <GuaranteedIncome />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
