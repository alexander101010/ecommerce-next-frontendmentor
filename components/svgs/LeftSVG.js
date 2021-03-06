export default function LeftSVG(props) {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      width='12'
      height='18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11 1 3 9l8 8'
        stroke={props.isHovered ? 'hsl(26, 100%, 55%)' : '#1D2026'}
        strokeWidth='3'
        fill='none'
        fillRule='evenodd'
      />
    </svg>
  );
}
