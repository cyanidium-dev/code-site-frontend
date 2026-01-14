interface ExtraInfoCardDecorationsProps {
  variant: "odd" | "even";
}

export default function ExtraInfoCardDecorations({
  variant,
}: ExtraInfoCardDecorationsProps) {
  if (!variant) return null;
  if (variant === "odd") {
    return (
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -z-10 top-[-154px] left-[-90px] lg:left-[-100px] lg:top-[-194px] w-[196px] h-[391px] rounded-full
       bg-purple-ultra-light/30 lg:bg-purple-ultra-light/50 supports-[backdrop-filter]:blur-[157px] will-change-transform rotate-45 origin-center"
        />
        <div
          className="absolute -z-10 bottom-[-212px] left-[118px] lg:left-auto lg:right-[-81px] lg:bottom-[6px] w-[135px] h-[417px] rounded-full
       bg-blue-dark/20 lg:bg-blue-dark/50 supports-[backdrop-filter]:blur-[75px] will-change-transform rotate-45 origin-center"
        />
      </div>
    );
  }
  if (variant === "even") {
    return (
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -z-10 top-[-229px] left-[118px] lg:left-[-87px] lg:top-auto lg:bottom-[6px] w-[135px] h-[417px] rounded-full
       bg-blue-dark/20 lg:bg-blue-dark/50 supports-[backdrop-filter]:blur-[75px] will-change-transform rotate-45 origin-center"
        />
      </div>
    );
  }
}
