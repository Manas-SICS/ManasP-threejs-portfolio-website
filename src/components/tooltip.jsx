import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <BrowserView>
        <div
          className="relative p-0 items-center"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {children}
          {isVisible && (
            <div className="absolute text-center font-bold top-[-30px] text-[14px] text-orange rounded z-1 w-full">
              {text}
            </div>
          )}
        </div>
      </BrowserView>
      <MobileView>
        <div className="relative p-0 items-center">
          {children}
          {
            <div className="absolute text-center font-bold top-[-30px] text-[14px] text-orange rounded z-1 w-full">
              {text}
            </div>
          }
        </div>
      </MobileView>
    </>
  );
};
