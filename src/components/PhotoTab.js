"use client";
import { useState } from "react";
import ClickableImg from "./ClickableImg";

function CarouselButton({ onClick, dir }) {
  return (
    <button
      className={`${
        dir == "right" ? "right-0" : "left-0"
      } absolute top-0 w-1/12 hover:bg-gray-600/50 h-full`}
      onClick={onClick}
    >
      <img src={dir == "right" ? "/right-arrow.png" : "/left-arrow.png"} />
    </button>
  );
}

export default function PhotoTab(props) {
  const [currPhotoIndex, setPhotoIndex] = useState(0);
  return (
    <div className="grid place-items-center block rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
      <div className="p-2 w-3/4">
        <h1 className="block text-3xl">{props.title}</h1>
        <img
          src="/location-pin.svg"
          width="20"
          height="20"
          className="inline-block mb-1 mr-1"
        />
        <h3 className="inline-block text-xl text-gray-600">{props.location}</h3>
        {props.date ? (
          <h4 className="block text-xl text-gray-600">{props.date}</h4>
        ) : null}
        <h5 className="block text-xl text-gray-600 pb-2">{`${props.imgNames.length} Photos`}</h5>
        <div className="relative flex justify-center">
          <ClickableImg
            src={props.basePath + props.imgNames[currPhotoIndex]}
            onClick={props.imgNames.length > 1 ? props.openGallery : null}
          />
          {props.imgNames.length > 1 ? (
            <>
              <CarouselButton
                dir="left"
                onClick={() => {
                  if (currPhotoIndex == 0) {
                    setPhotoIndex(props.imgNames.length - 1);
                  } else {
                    setPhotoIndex((currPhotoIndex - 1) % props.imgNames.length);
                  }
                }}
              />
              <CarouselButton
                dir="right"
                onClick={() => {
                  setPhotoIndex((currPhotoIndex + 1) % props.imgNames.length);
                }}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
