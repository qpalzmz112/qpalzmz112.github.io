"use client";
import { useState } from "react";
import ClickableImg from "./ClickableImg";

export default function PhotoGallery(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const [fullscreenImg, setFullscreenImg] = useState("");
  return (
    <div className="absolute h-screen w-screen top-0 left-0 p-16 grid grid-cols-3 grid-rows-3 place-items-center gap-4">
      <div
        className="absolute bg-gray-900/85 w-full h-full"
        onClick={props.closeGallery}
      />
      {props.imgNames.map((name) => {
        if (fullscreenImg && fullscreenImg != name) {
          return;
        }
        return (
          <ClickableImg
            updateFullscreen={() => {
              setFullscreenImg(fullscreenImg ? null : name);
            }}
            key={name}
            src={props.basePath + name}
          />
        );
      })}
      <button
        onClick={props.closeGallery}
        className="absolute top-0 right-0 bg-gray-600"
        onMouseEnter={() => {
          setMouseOver(true);
        }}
        onMouseLeave={() => {
          setMouseOver(false);
        }}
      >
        <img
          src={mouseOver ? "/close-button-hover.svg" : "/close-button.svg"}
          height="50"
          width="50"
        />
      </button>
    </div>
  );
}
// fullscreen state: value = img name
// if fullscreen, have gallery only render that clickableimg
