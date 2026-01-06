interface RestartIconProps {
  className?: string;
}

export default function RestartIcon({ className }: RestartIconProps) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="restart icon"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="68"
        height="68"
        rx="34"
        stroke="url(#paint0_linear_338_1487)"
        strokeWidth="2"
      />
      <g transform="translate(15, 15) scale(1.25)">
        <path
          d="M27.802 5.197c-2.925-3.194-7.13-5.197-11.803-5.197-8.837 0-16 7.163-16 16h3c0-7.18 5.82-13 13-13 3.844 0 7.298 1.669 9.678 4.322l-4.678 4.678h11v-11l-4.198 4.197z"
          fill="white"
        />
        <path
          d="M29 16c0 7.18-5.82 13-13 13-3.844 0-7.298-1.669-9.678-4.322l4.678-4.678h-11v11l4.197-4.197c2.925 3.194 7.13 5.197 11.803 5.197 8.837 0 16-7.163 16-16h-3z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_338_1487"
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

