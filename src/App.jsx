import gsap from "gsap";
import './index.css';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
  <main>
    <Navbar />
    <Hero />
        <div className="h-dvh bg-black"/>
  </main>
  )
}
export default App;