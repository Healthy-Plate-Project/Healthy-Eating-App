import React, { useState } from "react";
import { GooglePhoto } from "./Photo";
import { PhotoGalleryStyled } from "../../pages/SearchResult/PhotoGalleryStyles";
import { RestaurantPhoto } from "../../pages/SearchResult/SingleSearchResult";

type PhotoGalleryProps = {
  photoArray: string[];
};

//this is where all of our logic will live
export function PhotoGallery({ photoArray }: PhotoGalleryProps) {
  const [photoToShow, setPhotoToShow] = useState("");
  const [lightboxDisplay, setLightboxDisplay] = useState(false);

  //looping through our photos array to create img elements
  function photoCards() {
    return photoArray.map((photo: string) => (
      <GooglePhoto
        // className="photo-card"
        // onClick={() => showPhoto(photo)}
        photo_reference={photo}
        max_width="500"
        max_height="500"
        alt="Test Photos"
      ></GooglePhoto>
    ));
  }

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
    <>
      <PhotoGalleryStyled>
        <div id="photo-gallery-wrapper">
          {photoArray.map((photo: string) => {
            return (
              <GooglePhoto
                // className="photo-card"
                // onClick={() => showPhoto(photo)}
                photo_reference={photo}
                max_width="500"
                max_height="500"
                alt="Test Photos"
              ></GooglePhoto>
            );
          })}

          {lightboxDisplay ? (
            <div id="lightbox" onClick={hideLightBox}>
              <button onClick={showPrev}>⭠</button>
              <GooglePhoto
                id="lightbox-img"
                className="photo-card"
                photo_reference={photoToShow}
                max_width="1500px"
                alt="Test Photos"
              ></GooglePhoto>
              <button onClick={showNext}>⭢</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </PhotoGalleryStyled>
    </>
  );
}
