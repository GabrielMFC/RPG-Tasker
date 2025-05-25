import { useState, useRef } from "react";

export default function SideBar() {
  const [width, setWidth] = useState(600);
  const sidebarRef = useRef(null);
  const isResizing = useRef(false);

  const onMouseDown = (e) => {
    isResizing.current = true;
  };

  const onMouseMove = (e) => {
    if (isResizing.current) {
      const newWidth = e.clientX - sidebarRef.current.getBoundingClientRect().left;
      if (newWidth > 100 && newWidth < 1200) {
        setWidth(newWidth);
      }
    }
  };

  const onMouseUp = () => {
    isResizing.current = false;
  };

  return (
    <div
      ref={sidebarRef}
      style={{
        width: width + "px",
        height: "100vh",
        backgroundColor: "blue",
        position: "relative",
        userSelect: "none",
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "10px",
          height: "100%",
          cursor: "ew-resize",
          backgroundColor: "rgba(0,0,0,0.1)",
          zIndex: 10,
        }}
        onMouseDown={onMouseDown}
      />
      {/* Conteúdo do sidebar */}
    </div>
  );
}
