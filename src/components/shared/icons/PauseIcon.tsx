interface PauseIconProps {
  className?: string;
}

export default function PauseIcon({ className }: PauseIconProps) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="pause icon"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="68"
        height="68"
        rx="34"
        stroke="url(#paint0_linear_338_1486)"
        strokeWidth="2"
      />
      <rect x="26" y="22.5" width="5" height="25" rx="2.5" fill="white" />
      <rect x="39" y="22.5" width="5" height="25" rx="2.5" fill="white" />
      <defs>
        <linearGradient
          id="paint0_linear_338_1486"
          x1="35"
          y1="-1.28212e-06"
          x2="78.0208"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0998FB" />
          <stop offset="1" stopColor="#FD7ECD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
