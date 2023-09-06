import { Toaster } from "react-hot-toast";
import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
// import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { useState } from "react";



function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  
  return (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      {/* <Testimonial /> */}
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
