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
      {/* if this image isn't fullscreen or it's not in a gallery, render the small version of it - 
      don't want a single-image photo set to have the thumbnail disappear when the image is fullscreen */}
      {fullscreen && props.updateFullscreen ? null : (
        <img
          src={props.src}
          className={`h-full max-h-64 ${props.updateFullscreen ? "z-20" : ""}`}
        />
      )}
      {/* if this image is fullscreen, render it in fullscreen and add the gray background */}
      {fullscreen ? (
        <div className="z-20">
          {props.updateFullscreen ? null : (
            <div className="fixed top-0 left-0 bg-gray-900/85 w-full min-h-full" />
          )}
          <img
            src={props.src}
            className="fixed h-5/6 top-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
      ) : null}
      {/* if the mouse is over the image and it's not fullscreen, display the magnifying glass icon over it */}
      {mouseOver && !fullscreen ? (
        <img
          src="/full-screen.svg"
          className="h-full max-h-64 absolute top-0 opacity-60"
        />
      ) : null}
    </div>
  );
}
