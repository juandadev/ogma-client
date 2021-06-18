import React from "react";

export default function closeIcon({ size, color }) {
  return (
    <svg
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Close Icon</title>
      <path
        d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5"
        stroke={color || "black"}
      />
    </svg>
  );
}
