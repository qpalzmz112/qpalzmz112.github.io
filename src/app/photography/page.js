"use client";
import { useState } from "react";
import { Boilerplate, InfoText, PhotoTab, PhotoGallery } from "../index.js";
import photoSets from "./photos-info.js";

export default function Home() {
  const [gallery, setGallery] = useState("");
  return (
    <Boilerplate>
      <InfoText>To be completed.</InfoText>
      <div className="grid grid-cols-3 gap-4 p-4">
        {Object.keys(photoSets).map((key) => {
          let photoSet = photoSets[key];
          return (
            <PhotoTab
              key={key}
              title={photoSet.title}
              location={photoSet.location}
              date={photoSet.date}
              imgNames={photoSet.imgNames}
              basePath={photoSet.basePath}
              openGallery={() => {
                setGallery(key);
              }}
            />
          );
        })}
        {gallery ? (
          <PhotoGallery
            basePath={photoSets[gallery].basePath}
            imgNames={photoSets[gallery].imgNames}
            closeGallery={() => {
              setGallery("");
            }}
          />
        ) : null}
      </div>
    </Boilerplate>
  );
}
