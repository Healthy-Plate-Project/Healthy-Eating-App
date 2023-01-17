import React, { useEffect, useState } from "react";
import { getGooglePhoto } from "../../utils/serverCalls";

type PhotoProps = {
  photo_reference: string;
  max_height?: string;
  max_width?: string;
  alt?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
};

export function GooglePhoto({
  photo_reference,
  max_height,
  max_width,
  alt,
  className,
  onClick,
  id,
}: PhotoProps) {
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
  }, [photo_reference]);

  return (
    <button onClick={onClick}>
      <img
        src={photoURL}
        alt={alt}
        height="auto"
        // {max_height}
        width={max_width}
        className={className}
        id={id}
      />
    </button>
  );
}
