import AnimatedGraph from "./AnimatedGraph";

interface ReasonCardProps {
  reason: { title: string; description: string };
  idx: number;
}

export default function ReasonCard({ reason, idx }: ReasonCardProps) {
  const { title, description } = reason;

  return (
    <li
      className={`relative lg:z-10 w-[138%] md:first:w-full sm:w-auto md:w-[calc(50%-10px)] ${
        idx === 2
          ? "order-1 md:order-3"
          : idx === 0
          ? "order-2 md:order-1"
          : "order-3 md:order-2"
      }`}
    >
      {/* Gradient border layer with mask */}
      <div
        className="absolute inset-0 rounded-[8px] pointer-events-none"
        style={{
          background: "linear-gradient(93.51deg, #FFFFFF 2.88%, #121212 88%)",
          padding: "3px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Blue gradient background layer (conditional) */}
      {((idx === 0 && "mobile") || (idx === 1 && "desktop")) && (
        <div
          className={`absolute inset-[3px] rounded-[5px] pointer-events-none -z-10 ${
            idx === 0
              ? "block md:hidden bg-[linear-gradient(119deg,_#121212_39.83%,_#238BFB_279.51%)]"
              : "hidden md:block bg-[linear-gradient(119deg,_#121212_39.83%,_#238BFB_279.51%)]"
          }`}
        />
      )}

      {/* Content without background */}
      <div className="relative w-[72.5%] sm:w-full h-full p-7 lg:py-8 lg:px-9">
        <h3 className="max-w-[794px] mb-6 lg:mb-[18px] font-actay text-[24px] lg:text-[40px] font-bold lg:font-medium leading-[120%] uppercase">
          {title}
        </h3>
        <p
          className={`${
            idx === 1 ? "mb-[66px] sm:mb-[86px] md:mb-0" : ""
          } text-[14px] lg:text-[16px] font-light leading-[120%]`}
        >
          {description}
        </p>
      </div>
    </li>
  );
}
