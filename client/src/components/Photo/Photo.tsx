import React, { useEffect, useState } from "react";
import { getGooglePhoto } from "../../utils/serverCalls";

type PhotoProps = {
  photo_reference: string;
  max_height?: string;
  max_width?: string;
  alt?: string;
};


export function GooglePhoto({ photo_reference, max_height, max_width, alt }: PhotoProps) {

  const [photoURL, setPhotoURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const payload = {
          photo_reference: photo_reference,
          max_height: max_height,
          max_width: max_width,
        };
        const response = await getGooglePhoto(payload);
        setPhotoURL(response!);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [photo_reference, max_height, max_width]);

  return <img src={photoURL} alt={alt} />;
}
