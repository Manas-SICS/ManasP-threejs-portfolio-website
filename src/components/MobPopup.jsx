import { useState } from "react";
import { close, popupgif } from "../assets";
import Lottie from "lottie-react";

const Popup = () => {
  const [popup, setPopup] = useState(true);
  return (
    <div
      className={`${
        popup ? "sm:hidden flex" : "hidden"
      } justify-center items-center bg-black/[0.5] z-50 fixed w-full min-h-screen`}
    >
      <div className="flex flex-col w-3/4 h-auto bg-tertiary p-5 drop-shadow-[0px_0px_50px_rgb(0,0,0)] rounded-xl">
        <img
          src={close}
          alt="Close-button"
          onClick={() => setPopup(false)}
          className="w-5 h-5 z-[60] fixed self-end"
        />
        <Lottie
          animationData={popupgif}
          alt="Use-Larger-Screen"
          className="mt-5"
        />
        <div className="text-[26px] text-orange font-black flex justify-between">
          <p>Did you know</p>
          <p className="ml-1">.</p>
          <p className="ml-2">.</p>
          <p className="ml-2">.</p>
        </div>
        <div className="mt-4 text-[14px] font-light text-light-grey">
          This site is best viewed on larger screens.{" "}
          <span className="text-white font-normal">
            (P.S. It has 3d Models that you can interact with!)
          </span>
        </div>
        <div className="mt-2 text-[14px] font-light text-light-grey">
          If you still wish to view the website with lesser functionality, you
          may{" "}
          <span
            className="text-orange underline font-medium underline-offset-2"
            onClick={() => setPopup(false)}
          >
            close this popup
          </span>{" "}
          and continue.
        </div>
      </div>
    </div>
  );
};

export default Popup;
