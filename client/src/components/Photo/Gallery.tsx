import React, { useState } from "react";
import { GooglePhoto } from "./Photo";
import { GalleryStyled } from "./PhotoGalleryStyles";

type GalleryProps = {
  photoArray: string[];
};

export function Gallery({ photoArray }: GalleryProps) {
  const [photoToShow, setPhotoToShow] = useState("");
  const [lightboxDisplay, setLightboxDisplay] = useState(false);

  //function to show a specific photo in the lightbox, amd make lightbox visible
  const showPhoto = (photo: string) => {
    setPhotoToShow(photo);
    setLightboxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightboxDisplay(false);
  };

  //show next photo in lightbox
  const showNext = (e: any) => {
    e.stopPropagation();
    let currentIndex = photoArray.indexOf(photoToShow);
    if (currentIndex >= photoArray.length - 1) {
      setLightboxDisplay(false);
    } else {
      let nextPhoto = photoArray[currentIndex + 1];
      setPhotoToShow(nextPhoto);
    }
  };

  //show previous photo in lightbox
  const showPrev = (e: any) => {
    e.stopPropagation();
    let currentIndex = photoArray.indexOf(photoToShow);
    if (currentIndex <= 0) {
      setLightboxDisplay(false);
    } else {
      let nextPhoto = photoArray[currentIndex - 1];
      setPhotoToShow(nextPhoto);
    }
  };

  return (
    <GalleryStyled>
      <div id="photo-gallery-wrapper">
        {photoArray.map((photo: string) => {
          return (
            <GooglePhoto
              className="photo-card"
              onClick={() => showPhoto(photo)}
              photo_reference={photo}
              max_width="290"
              max_height="290"
              alt="Test Photos"
              key={photo}
            ></GooglePhoto>
          );
        })}

        {lightboxDisplay ? (
          <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev}>⭠</button>
            <GooglePhoto
              id="lightbox-img"
              // className="photo-card"
              photo_reference={photoToShow}
              max_width="200"
              max_height="200"
              alt="Test Photos"
            ></GooglePhoto>
            <button onClick={showNext}>⭢</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </GalleryStyled>
  );
}
