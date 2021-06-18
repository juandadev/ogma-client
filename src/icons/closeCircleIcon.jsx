import React from "react";

export default function closeCircleIcon({ size, color }) {
  return (
    <svg
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Close Circle Icon</title>
      <path
        d="M4.5 4.5L10.5 10.5M4.5 10.5L10.5 4.5M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5Z"
        stroke={color || "black"}
      />
    </svg>
  );
}
