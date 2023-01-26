import React, { useEffect, useState } from "react";
import { apiCall, API } from "../../utils/serverCalls";
import GoogleTestPhoto from "../../utils/TestPhotos/GoogleTestPhoto.jpg";

type PhotoProps = {
  photo_reference: string;
  max_height?: string;
  max_width?: string;
  alt?: string;
};

export function GooglePhoto({
  photo_reference,
  max_height,
  max_width,
  alt,
}: PhotoProps) {
  const [photoURL, setPhotoURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const body = {
          photo_reference,
          max_height,
          max_width,
        };
        const url = await apiCall(API.getGooglePhoto, body);
        setPhotoURL(url === "TESTPHOTO" ? GoogleTestPhoto : url);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [photo_reference, max_height, max_width]);

  return <img src={photoURL} alt={alt} />;
}
