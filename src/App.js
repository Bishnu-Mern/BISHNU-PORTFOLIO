import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hiro from "./components/Hiro";
import Skills from "./components/Skills";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import Honors from "./components/Honors";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    document.title = "Bishnu Sahoo";
    AOS.init();
  }, []);
  return (
    <div className={isDarkMode ? "dark px-6 lg:px-20 xl:px-36 bg-dark-500" : " dark px-6 lg:px-20 xl:px-36 bg-light-100"}>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Hiro />
      <Skills />
      <Honors/>
      <Certs />
      <Footer />
    </div>
  );
}

export default App;
