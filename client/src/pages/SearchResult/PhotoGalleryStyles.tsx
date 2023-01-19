import styled from "styled-components/macro";

export const PhotoGalleryStyled = styled.div`
  #photo-gallery-wrapper {
    text-align: center;
    font-family: "Roboto", sans-serif;
  }

  // test
  .photo-card {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
    background-color: blue; // for testing where is this being used?
  }

  // the enlarged image when clicked
  #lightbox-img {
    height: auto;
    max-width: 90vw;
    object-fit: cover;
    margin: 0 auto;
  }

  // gray out background when photo enlarged
  #lightbox {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*Other Lightbox styles*/

  img:hover,
  button:hover {
    cursor: pointer;
  }
  button {
    border-width: 0;
    border-style: none;
    border-color: none;
    margin: 0;
    padding: 0;
  }

  #top-photo {
    width: 100%;
  }
`;
