interface ArrowInCircleIconProps {
  className?: string;
  isShownMore?: boolean;
}

export default function ArrowInCircleIcon({
  className,
}: ArrowInCircleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      aria-label="arrow in circle icon"
      className={`${className}`}
    >
      <path
        d="M16.498 30.2502C24.092 30.2502 30.248 24.0942 30.248 16.5002C30.248 8.90633 24.092 2.75024 16.498 2.75024C8.90413 2.75024 2.74805 8.90633 2.74805 16.5002C2.74805 24.0942 8.90413 30.2502 16.498 30.2502Z"
        stroke="white"
        strokeWidth="2.475"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7656 21.3537L19.6056 16.5L14.7656 11.6462"
        stroke="white"
        strokeWidth="2.475"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
