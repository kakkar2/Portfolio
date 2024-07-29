import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import ProgressBar from "react-scroll-progress-bar";
import Loader from "./components/loader";

const App = () => {
  // preloader
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <ProgressBar height="8" bgcolor="rgb(79 70 229 / 1)" duration="0.4" />
      <Header />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
