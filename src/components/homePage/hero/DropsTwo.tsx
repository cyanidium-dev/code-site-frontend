interface DropsTwoProps {
  drops: {
    colorOne: string;
    colorTwo: string;
  };
  className?: string;
}

export default function DropsTwo({ drops, className = "" }: DropsTwoProps) {
  const { colorOne, colorTwo } = drops;

  return (
    <svg
      width="207"
      height="181"
      viewBox="0 0 207 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_25_78951)">
        <ellipse
          cx="153.133"
          cy="69.2563"
          rx="43.2638"
          ry="6.72386"
          transform="rotate(-96.0528 153.133 69.2563)"
          fill={colorOne}
        />
      </g>
      <g filter="url(#filter1_f_25_78951)">
        <ellipse
          cx="153.211"
          cy="70.6477"
          rx="33.3049"
          ry="4.70978"
          transform="rotate(-96.0528 153.211 70.6477)"
          fill={colorTwo}
        />
      </g>
      <g filter="url(#filter2_f_25_78951)">
        <ellipse
          cx="74.1833"
          cy="91.392"
          rx="8.69808"
          ry="4.70978"
          transform="rotate(-96.0528 74.1833 91.392)"
          fill={colorTwo}
        />
      </g>
      <g filter="url(#filter3_f_25_78951)">
        <ellipse
          cx="28.1641"
          cy="128.651"
          rx="17.4311"
          ry="9.43851"
          transform="rotate(-96.0528 28.1641 128.651)"
          fill={colorTwo}
        />
      </g>
      <g opacity="0.27" filter="url(#filter4_f_25_78951)">
        <ellipse
          cx="177.098"
          cy="140.965"
          rx="8.69808"
          ry="4.70978"
          transform="rotate(-96.0528 177.098 140.965)"
          fill={colorTwo}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_25_78951"
          x="119.605"
          y="0.794834"
          width="67.0561"
          height="136.923"
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
            stdDeviation="12.7164"
            result="effect1_foregroundBlur_25_78951"
          />
        </filter>
        <filter
          id="filter1_f_25_78951"
          x="138.341"
          y="28.5088"
          width="29.7407"
          height="84.2778"
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
            stdDeviation="4.50793"
            result="effect1_foregroundBlur_25_78951"
          />
        </filter>
        <filter
          id="filter2_f_25_78951"
          x="60.3943"
          y="73.712"
          width="27.5786"
          height="35.3599"
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
            stdDeviation="4.50793"
            result="effect1_foregroundBlur_25_78951"
          />
        </filter>
        <filter
          id="filter3_f_25_78951"
          x="0.529661"
          y="93.2202"
          width="55.2688"
          height="70.8621"
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
            stdDeviation="9.034"
            result="effect1_foregroundBlur_25_78951"
          />
        </filter>
        <filter
          id="filter4_f_25_78951"
          x="163.309"
          y="123.285"
          width="27.5786"
          height="35.3599"
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
            stdDeviation="4.50793"
            result="effect1_foregroundBlur_25_78951"
          />
        </filter>
      </defs>
    </svg>
  );
}
