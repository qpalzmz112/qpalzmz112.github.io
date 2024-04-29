"use client";
import { useState } from "react";

export default function ClickableImg(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <div
      className={`${mouseOver ? "cursor-pointer" : ""} 
      relative h-full flex justify-center`}
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
      onClick={
        props.onClick
          ? props.onClick
          : () => {
              if (props.updateFullscreen) {
                props.updateFullscreen();
              }
              setFullscreen(!fullscreen);
              setMouseOver(false);
            }
      }
    >
      {fullscreen && props.updateFullscreen ? null : (
        <img src={props.src} className="h-32" />
      )}
      {fullscreen ? (
        <>
          <img
            src={props.src}
            className="fixed h-5/6 top-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
          />
          {props.updateFullscreen ? null : (
            <div className="fixed top-0 left-0 bg-gray-900/85 w-full h-full" />
          )}
        </>
      ) : null}
      {mouseOver && !fullscreen ? (
        <img
          src="/full-screen.svg"
          className="h-32 absolute top-0 opacity-60"
        />
      ) : null}
    </div>
  );
}
