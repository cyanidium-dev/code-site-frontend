interface BottomEllipseMobProps {
  color: string;
}

export default function BottomEllipseMob({ color }: BottomEllipseMobProps) {
  return (
    <svg
      width="1166"
      height="528"
      viewBox="0 0 1166 528"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="md:hidden w-[1166px] sm:w-[1700px] h-[528px] sm:h-[600px] absolute z-10 bottom-0 translate-y-40 sm:translate-y-[197px] 
      left-[calc(50%-550px)] sm:left-[calc(50%-850px)]"
    >
      <g filter="url(#filter0_f_2002_2215)">
        <ellipse cx="582.557" cy="263.556" rx="509" ry="190" fill={color} />
      </g>
      <defs>
        <filter
          id="filter0_f_2002_2215"
          x="0.000305176"
          y="-0.000183105"
          width="1165.11"
          height="527.113"
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
            stdDeviation="36.7782"
            result="effect1_foregroundBlur_2002_2215"
          />
        </filter>
      </defs>
    </svg>
  );
}
