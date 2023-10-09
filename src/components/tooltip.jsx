import React, { useState } from "react";

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative p-0"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute text-center top-0 bg-black/[0.8] text-white p-2 rounded z-1 w-full">
          {text}
        </div>
      )}
    </div>
  );
};
