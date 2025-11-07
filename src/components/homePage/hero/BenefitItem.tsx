"use client";

interface BenefitItemProps {
  benefit: {
    value: string;
    description: string;
  };
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  const { value, description } = benefit;

  return (
    <li className="flex flex-col justify-center items-center w-[calc(50%-5px)] lg:w-[186px] xl:w-[246px] pt-1.5 pb-3 lg:pb-[15px] px-4 rounded-[4px] lg:rounded-[6px] border-[1.5px] lg:border-2 border-white">
      <p className="mb-[5px] xl:mb-4 font-guano-apes text-[50px] lg:text-[70px] xl:text-[90px] font-medium uppercase">
        {value}
      </p>
      <p className="font-actay text-[8px] lg:text-[10px] xl:text-[12px] font-bold uppercase text-center">
        {description}
      </p>
    </li>
  );
}
