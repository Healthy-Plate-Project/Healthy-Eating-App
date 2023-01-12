import styled from "styled-components/macro";

export const PhotoGalleryStyled = styled.div`
  #photo-gallery-wrapper {
    text-align: center;
    font-family: "Roboto", sans-serif;
  }

  .image-card {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
  }

  #lightbox-img {
    height: 80vh;
    max-width: 90vw;
    object-fit: cover;
  }

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
    justify-content: space-between;
  }

  /*Completely optional styling that has nothing to do with the lightbox*/
  button {
    color: white;
    border: 2px solid #a167da;
    background-color: #a167da;
    font-size: 1.2rem;
  }

  a {
    color: #7a4baa;
  }

  h1 {
    color: #7a4baa;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }

  img:hover,
  button:hover {
    cursor: pointer;
  }

  body {
    background-color: rgba(196, 155, 237, 0.45);
  }
`;
