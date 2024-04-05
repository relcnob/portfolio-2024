import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorBg, setCursorBg] = useState("");

  useEffect(() => {
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
  }, []);

  const bgPath: { [key: string]: string } = {
    parky: "bg-[url('/parky.jpg')]",
    comwell: "bg-[url('/comwell.jpg')]",
    portfolio: "bg-[url('/portfolio.jpg')]",
    vikingfest: "bg-[url('/vikingfest.jpg')]",
  };

  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`p-0 fixed pointer-events-none -translate-x-1/2 -translate-y-[110%] z-50 aspect-video w-[600px] max-w-[50vw] max-h-[90vh] border border-primary-000 dark:border-secondary-000 rounded-md bg-white dark:bg-secondary-200 transition-background duration-500 bg-cover bg-center ${
          cursorBg
            ? `opacity-100 ${bgPath[cursorBg]}`
            : "opacity-0 bg-none max-w-0 max-h-0"
        }`}
      ></div>
    </>
  );
};

export default CustomCursor;
