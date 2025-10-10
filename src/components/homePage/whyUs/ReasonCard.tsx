import AnimatedGraph from "./AnimatedGraph";

interface ReasonCardProps {
  reason: { title: string; description: string };
  idx: number;
}

export default function ReasonCard({ reason, idx }: ReasonCardProps) {
  const { title, description } = reason;

  return (
    <li
      className={`p-[3px] bg-[linear-gradient(93.51deg,_#FFFFFF_2.88%,_#121212_88%)] rounded-[8px] md:first:w-full md:w-[calc(50%-10px)] ${
        idx === 2
          ? "order-1 md:order-3"
          : idx === 0
          ? "order-2 md:order-1"
          : "order-3 md:order-2"
      }`}
    >
      <div className="h-full bg-black py-8 px-8 rounded-[8px]">
        <h3 className="max-w-[794px] mb-6 lg:mb-[18px] font-actay text-[24px] lg:text-[40px] font-bold lg:font-medium leading-[120%] uppercase">
          {title}
        </h3>
        <p className="text-[14px] font-light leading-[120%]">{description}</p>
      </div>
    </li>
  );
}
