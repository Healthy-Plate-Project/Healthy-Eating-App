import React, { useEffect, useState } from "react";
import { apiCall, API } from "../../utils/serverCalls";
import GoogleTestPhoto from "../../utils/TestPhotos/GoogleTestPhoto.jpg";
import { RelativeSpinner } from "../Spinner/Spinner";
import { Photo } from "./PhotoStyles";
import { useNavigate } from "react-router-dom";

type PhotoProps = {
  photo_reference: string;
  max_height?: string;
  max_width?: string;
  alt?: string;
  place_id?: string;
  name?: string;
};

export function GooglePhoto({
  photo_reference,
  max_height,
  max_width,
  alt,
  place_id,
  name,
}: PhotoProps) {
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();
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
        setSpinner(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const [spinner, setSpinner] = useState(true);
  if (spinner) return <RelativeSpinner />;
  return (
    <div
      onClick={() => place_id && navigate(`/single-result/${place_id}`)}
      title={name}
    >
      <Photo src={photoURL} alt={alt} />
    </div>
  );
}
