import React, { useEffect, useRef, useState } from "react";
// Define cursor colors
const CURSOR_COLORS = {
  h1: "green-400",
  button: "orange-500",
  default: "sky-500",
};
// Main CustomCursor component
const CustomCursor = () => {
  // Reference to the cursor element
  const cursorRef = useRef(null);
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // State to track cursor color
  const [cursorBg, setCursorBg] = useState("");
  // State to track click event

  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e: any) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    const handleMouseOver = (e: any) => {
      const tagId = e.target.id;

      if (tagId) {
        setCursorBg(tagId);
      } else {
        setCursorBg("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []); // useEffect runs only once on mount

  const bgPath: { [key: string]: string } = {
    parky: "bg-[url('/parky.png')]",
    comwell: "bg-[url('/comwell.png')]",
    portfolio: "bg-[url('/portfolio.png')]",
  };

  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`p-0 fixed pointer-events-none -translate-x-1/2 -translate-y-[150%] z-50 aspect-video w-96 border rounded-xl bg-white dark:bg-secondary-200 transition-background duration-300 bg-cover bg-center ${
          cursorBg
            ? `opacity-100 ${bgPath[cursorBg]} delay-300`
            : "opacity-0 bg-none"
        }`}
      >
        {cursorBg}
      </div>
    </>
  );
};

export default CustomCursor;
