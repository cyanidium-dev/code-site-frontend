interface BottomEllipseDeskProps {
  color: string;
}

export default function BottomEllipseDesk({ color }: BottomEllipseDeskProps) {
  return (
    <svg
      width="2127"
      height="836"
      viewBox="0 0 2127 836"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block absolute z-10 bottom-0 md:translate-y-[458px] md:left-[calc(50%-930px)]"
    >
      <g filter="url(#filter0_f_2002_1854)">
        <ellipse
          cx="1063.18"
          cy="417.742"
          rx="928.939"
          ry="283.5"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2002_1854"
          x="-0.000106812"
          y="-0.000106812"
          width="2126.36"
          height="835.485"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="67.1211"
            result="effect1_foregroundBlur_2002_1854"
          />
        </filter>
      </defs>
    </svg>
  );
}
