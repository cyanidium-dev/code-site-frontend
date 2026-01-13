import StarIcon from "@/components/shared/icons/StarIcon";
import MainButton from "@/components/shared/buttons/MainButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

interface Service {
  title: string;
  subtitle: string;
  priceText: string;
  price: string;
  description: string;
  pros: string[];
  seeMore: string;
  wantIt: string;
  seeMoreLink?: string;
  wantItLink?: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  const {
    title,
    subtitle,
    priceText,
    price,
    description,
    pros,
    seeMore,
    wantIt,
    seeMoreLink,
    wantItLink,
  } = service;
  return (
    <li className="relative group rounded-[8px] overflow-hidden p-8 pb-7 backdrop-blur-[37.9px] bg-black/26 flex flex-col h-full">
      <div className="absolute z-10 inset-0 rounded-[8px] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
      <div
        className="absolute z-10 inset-0 rounded-[8px] pointer-events-none"
        style={{
          background:
            "linear-gradient(175.34deg, #FF76C1 3.91%, #6A8FFF 123.62%)",
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="flex-1 flex flex-col">
        <h3 className="font-actay text-[16px] leading-[120%] uppercase text-white font-bold mb-4">
          {title}
          <span className="block">{subtitle}</span>
        </h3>
        <p className="flex gap-3 items-end font-actay text-[22px] leading-[120%] uppercase text-white font-bold mb-5">
          {priceText}
          <span className="block font-guano-apes text-[60px] leading-[108.28%] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-bright">
            {price}
          </span>
        </p>
        <p className="text-[14px] leading-[122%] font-light mb-8 min-h-[4lh]">
          {description}
        </p>
        <ul className="flex flex-col gap-3 mb-8">
          {pros.map((pro, idx) => (
            <li key={idx} className="flex gap-3 items-center">
              <StarIcon className="shrink-0" />
              <p className="text-[14px]font-light leading-[122%]">{pro}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <SecondaryButton
          variant="white"
          className="mb-2 h-12 text-[12.8103px] leading-[123%] uppercase font-bold"
        >
          {seeMore}
        </SecondaryButton>
        <MainButton
          variant="pink"
          className="h-12 text-[12.8103px] leading-[123%] uppercase font-bold"
        >
          {wantIt}
        </MainButton>
      </div>
    </li>
  );
}
