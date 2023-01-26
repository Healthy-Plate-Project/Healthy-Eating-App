import React from "react";

export function RelativeSpinner() {
  return (
    <div data-title="dot-windmill">
      <div className="stage">
        <div className="dot-windmill">
          <style>{SPINNER_CSS}</style>
        </div>
      </div>
    </div>
  );
}

export function FullPageSpinner() {
  return (
    <div className="snippet" data-title="dot-windmill">
      <div className="stage">
        <div className="dot-windmill">
          <style>{SPINNER_CSS}</style>
        </div>
      </div>
    </div>
  );
}

const SPINNER_CSS = `
  .snippet{
    display: block;
    position: fixed;
    z-index: 1031;
    top: 50%;
    right: 50%;
    margin-top: -..px;
    margin-right: -..px;
  }
  .dot-windmill {
    position: relative;
    top: -10px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    transform-origin: 5px 15px;
    animation: dot-windmill 2s infinite linear;
  }
  .dot-windmill::before, .dot-windmill::after {
    content: "";
    display: inline-block;
    position: absolute;
  }
  .dot-windmill::before {
    left: -8.66254px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
  }
  .dot-windmill::after {
    left: 8.66254px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
  }
  @keyframes dot-windmill {
    0% {
      transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotateZ(720deg) translate3d(0, 0, 0);
    }
  }
  `;
