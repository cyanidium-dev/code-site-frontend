interface CodeSIteArtProps {
  className?: string;
}

export default function CodeSIteArt({ className = "" }: CodeSIteArtProps) {
  return (
    <p
      className={`font-guano-apes text-[250px] lg:text-[376px] font-medium leading-[147%] uppercase ${className}`}
    >
      Code-site.art
    </p>
  );
}
