interface PlayIconProps {
  className?: string;
}

export default function PlayIcon({ className }: PlayIconProps) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="play icon"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="68"
        height="68"
        rx="34"
        stroke="url(#paint0_linear_338_1484)"
        strokeWidth="2"
      />
      <path
        d="M48 31.5359C50.6667 33.0755 50.6667 36.9245 48 38.4641L31.5 47.9904C28.8333 49.53 25.5 47.6055 25.5 44.5263V25.4737C25.5 22.3945 28.8333 20.47 31.5 22.0096L48 31.5359Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_338_1484"
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
