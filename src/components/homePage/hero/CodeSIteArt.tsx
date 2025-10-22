interface CodeSIteArtProps {
  colorLogo: string;
  className?: string;
}

export default function CodeSIteArt({
  colorLogo,
  className = "",
}: CodeSIteArtProps) {
  return (
    <p
      style={{ color: colorLogo }}
      className={`font-guano-apes text-[250px] lg:text-[376px] font-medium leading-[147%] uppercase whitespace-nowrap ${className}`}
    >
      Code-site.art
    </p>
  );
}
