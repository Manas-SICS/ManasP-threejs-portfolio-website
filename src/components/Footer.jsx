import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="h-full items-center mt-10 sm:mt-0 mb-10 sm:mb-0 w-full bg-tertiary">
      <p className="w-full text-center font-medium text-[17px]">
        &copy;2023 Manas Prabhutendolkar
        <br />
        <span className="font-light text-[12px]">All rights reserved.</span>
      </p>
      <div className="flex justify-between mt-10 sm:mt-3">
        <p className="p-2 items-center flex font-bold">
          Credits and Attributions{" "}
        </p>
        <div className="w-[2px] bg-white h-min-full">&nbsp;</div>
        <div className="w-full font-light text-[12px] p-5 text-left flex flex-col gap-2">
          <p>
            Inspiration: Build and Deploy an Amazing 3D Web Developer Portfolio
            in React JS | Beginner Three.js Tutorial
            <span className="italic">
              {" "}
              by JavaScript Mastery on Youtube
            </span>{" "}
            |&nbsp;
            <a
              href="https://www.youtube.com/watch?v=0fYi8SGA20k&t=308s"
              target="_blank"
              className="underline font-bold"
            >
              &nbsp;View Video
            </a>
          </p>
          <p>
            MacBook Model: Apple Laptop 3D model
            <span className="italic"> by Zhukovskyi on TurboSquid</span> |&nbsp;
            <a
              href="https://www.turbosquid.com/3d-models/laptop-notebook-3d-model-1570485"
              target="_blank"
              className="underline font-bold"
            >
              View Model
            </a>
          </p>
          <p>
            Earth Model: hologram gezegen
            <span className="italic"> by EmreKazaz on SketchFab</span> |&nbsp;
            <a
              href="https://sketchfab.com/3d-models/hologram-gezegen-04eb5d4c661f4179ac3f49f2dccb988c"
              target="_blank"
              className="underline font-bold"
            >
              View Model
            </a>
          </p>
          <p>
            Hero Image: <span className="italic">Combination of </span> Birds.
            IG: c0nrad98 |
            <span className="italic">
              {" "}
              &nbsp;by Adrian Kirkegaard on Unsplash
            </span>{" "}
            |&nbsp;
            <a
              href="https://unsplash.com/photos/nCrrvuoyftA"
              target="_blank"
              className="underline font-bold"
            >
              View Photo
            </a>{" "}
            | <span className="italic"> and </span> Portrait orientation white
            tiled background |
            <span className="italic">&nbsp;by Annie Spratt on Unsplash</span>{" "}
            |&nbsp;
            <a
              href="https://unsplash.com/photos/s1N_aVIviqA"
              target="_blank"
              className="underline font-bold"
            >
              View Photo
            </a>
          </p>
          <p>
            Tools Used: ReactJS -&nbsp;
            <a
              href="https://react.dev/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| React-three-fiber -&nbsp;
            <a
              href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Three.JS -&nbsp;
            <a
              href="https://threejs.org/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| EmailJS -&nbsp;
            <a
              href="https://www.emailjs.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| VS Code -&nbsp;
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Node.js -&nbsp;
            <a
              href="https://nodejs.org/en"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Tailwind CSS -&nbsp;
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Figma -&nbsp;
            <a
              href="https://www.figma.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Blender -&nbsp;
            <a
              href="https://www.blender.org/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Adobe Creative Cloud -&nbsp;
            <a
              href="https://www.adobe.com/in/creativecloud.html"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Grammarly -&nbsp;
            <a
              href="https://app.grammarly.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Framer Motion -&nbsp;
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Behance -&nbsp;
            <a
              href="https://www.behance.net/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Scribd -&nbsp;
            <a
              href="https://www.scribd.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| GitHub -&nbsp;
            <a
              href="https://github.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| IconScout -&nbsp;
            <a
              href="https://iconscout.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
            &nbsp;| Unsplash -&nbsp;
            <a
              href="https://unsplash.com/"
              target="_blank"
              className="underline font-bold"
            >
              View
            </a>{" "}
          </p>
          <p>
            Credits to the respective organisations whose logos have been used
            on the website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "");
