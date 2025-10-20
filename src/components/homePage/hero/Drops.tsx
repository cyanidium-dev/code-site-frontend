interface DropsProps {
  drops: {
    colorOne: string;
    colorTwo: string;
  };
  className?: string;
}

export default function Drops({ drops, className = "" }: DropsProps) {
  const { colorOne, colorTwo } = drops;

  return (
    <svg
      width="127"
      height="114"
      viewBox="0 0 127 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_2002_2083)">
        <ellipse
          cx="32.3732"
          cy="69.8579"
          rx="27.9436"
          ry="4.34286"
          transform="rotate(78.1806 32.3732 69.8579)"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_f_2002_2083)">
        <ellipse
          cx="32.2333"
          cy="68.9688"
          rx="21.5112"
          ry="3.04199"
          transform="rotate(78.1806 32.2333 68.9688)"
          fill={colorTwo}
        />
      </g>
      <g filter="url(#filter2_f_2002_2083)">
        <ellipse
          cx="81.6713"
          cy="50.5095"
          rx="5.61798"
          ry="3.04199"
          transform="rotate(78.1806 81.6713 50.5095)"
          fill={colorTwo}
        />
      </g>
      <g filter="url(#filter3_f_2002_2083)">
        <ellipse
          cx="108.826"
          cy="23.5795"
          rx="11.2586"
          ry="6.09622"
          transform="rotate(78.1806 108.826 23.5795)"
          fill={colorTwo}
        />
      </g>
      <g opacity="0.27" filter="url(#filter4_f_2002_2083)">
        <ellipse
          cx="12.3197"
          cy="25.3319"
          rx="5.61798"
          ry="3.04199"
          transform="rotate(78.1806 12.3197 25.3319)"
          fill={colorTwo}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2002_2083"
          x="8.81641"
          y="26.0653"
          width="47.1133"
          height="87.5852"
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
            stdDeviation="8.21338"
            result="effect1_foregroundBlur_2002_2083"
          />
        </filter>
        <filter
          id="filter1_f_2002_2083"
          x="21.0918"
          y="42.081"
          width="22.2832"
          height="53.7756"
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
            stdDeviation="2.91162"
            result="effect1_foregroundBlur_2002_2083"
          />
        </filter>
        <filter
          id="filter2_f_2002_2083"
          x="72.6553"
          y="39.1517"
          width="18.0322"
          height="22.7156"
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
            stdDeviation="2.91162"
            result="effect1_foregroundBlur_2002_2083"
          />
        </filter>
        <filter
          id="filter3_f_2002_2083"
          x="90.7578"
          y="0.818263"
          width="36.1376"
          height="45.5226"
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
            stdDeviation="5.83495"
            result="effect1_foregroundBlur_2002_2083"
          />
        </filter>
        <filter
          id="filter4_f_2002_2083"
          x="3.30371"
          y="13.9741"
          width="18.0322"
          height="22.7156"
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
            stdDeviation="2.91162"
            result="effect1_foregroundBlur_2002_2083"
          />
        </filter>
      </defs>
    </svg>
  );
}
