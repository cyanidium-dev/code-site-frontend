interface FourPointsStarIconProps {
  className?: string;
  isShownMore?: boolean;
  idx?: number;
}

export default function FourPointsStarIcon({
  className = "",
  isShownMore = false,
  idx = 0,
}: FourPointsStarIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-label="four points star icon"
      className={className}
      style={
        {
          "--gradient-start": isShownMore ? "#000000" : "#EAEBFF",
          "--gradient-end": isShownMore ? "#000000" : "#6A8FFF",
          transition: "all 0.3s ease-in-out",
        } as React.CSSProperties
      }
    >
      <path
        d="M16.002 0L17.0768 14.9252L32.002 16L17.0768 17.0748L16.002 32L14.9272 17.0748L0.00195312 16L14.9272 14.9252L16.002 0Z"
        fill={`url(#${idx})`}
      />
      <defs>
        <linearGradient
          id={`${idx}`}
          x1="16.5877"
          y1="-1.36434e-07"
          x2="19.9417"
          y2="41.1574"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--gradient-start)" />
          <stop offset="1" stopColor="var(--gradient-end)" />
          {/* <stop stopColor="#EAEBFF" />
          <stop offset="1" stopColor="#6A8FFF" /> */}
        </linearGradient>
      </defs>
    </svg>
  );
}
