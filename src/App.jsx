import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-[url('./assets/herobg_mob.png')] md:bg-[url('./assets/herobg.png')] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="bg-tertiary border-y-4 mb-[5px] border-orange w-full">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
