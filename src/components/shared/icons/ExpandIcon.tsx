interface ExpandIconProps {
  className?: string;
}

export default function ExpandIcon({ className }: ExpandIconProps) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="expand icon"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="68"
        height="68"
        rx="34"
        stroke="url(#paint0_linear_expand_icon)"
        strokeWidth="2"
      />
      <g transform="translate(12.6, 12.6) scale(1.4)">
        <path
          d="M12 28.75h-8.75v-8.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 10c0 0.69 0.56 1.25 1.25 1.25h10c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM30 18.75c-0.69 0.001-1.249 0.56-1.25 1.25v8.75h-8.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h10c0.69-0.001 1.249-0.56 1.25-1.25v-10c-0.001-0.69-0.56-1.249-1.25-1.25h-0zM12 0.75h-10c-0.69 0-1.25 0.56-1.25 1.25v0 10c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-8.75h8.75c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM30 0.75h-10c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h8.75v8.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-10c-0-0.69-0.56-1.25-1.25-1.25h-0z"
          fill="currentColor"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_expand_icon"
          x1="35"
          y1="0"
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
