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
    parky: "bg-[url('/parky.png')]",
    comwell: "bg-[url('/comwell.png')]",
    portfolio: "bg-[url('/portfolio.png')]",
  };

  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`p-0 fixed pointer-events-none -translate-x-1/2 -translate-y-[150%] z-50 aspect-video w-[512px] max-w-[50vw] border rounded-xl bg-white dark:bg-secondary-200 transition-background duration-300 bg-cover bg-center ${
          cursorBg
            ? `opacity-100 ${bgPath[cursorBg]} delay-100`
            : "opacity-0 bg-none"
        }`}
      >
        {cursorBg}
      </div>
    </>
  );
};

export default CustomCursor;
