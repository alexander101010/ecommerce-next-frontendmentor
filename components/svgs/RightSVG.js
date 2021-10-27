import { useState } from 'react';

export default function RightSVG(props) {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      width='13'
      height='18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m2 1 8 8-8 8'
        stroke={props.isHovered ? 'hsl(26, 100%, 55%)' : '#1D2026'}
        strokeWidth='3'
        fill='none'
        fillRule='evenodd'
      />
    </svg>
  );
}
