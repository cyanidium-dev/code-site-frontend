interface StarIconProps {
  className?: string;
}

export default function StarIcon({ className = "" }: StarIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      aria-label="star icon"
      className={className}
    >
      <path
        d="M8 0.599976L9.04512 5.72853L13.1423 2.47162L10.6463 7.07211L15.8785 7.21079L11.0093 9.1306L14.9282 12.6L9.96418 10.9408L10.7362 16.1175L8 11.6557L5.26384 16.1175L6.03582 10.9408L1.0718 12.6L4.99069 9.1306L0.121538 7.21079L5.35366 7.07211L2.8577 2.47162L6.95488 5.72853L8 0.599976Z"
        fill="white"
      />
    </svg>
  );
}
