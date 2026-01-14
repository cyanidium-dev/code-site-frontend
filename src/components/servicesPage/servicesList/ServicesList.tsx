"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Service } from "@/types/service";
import { twMerge } from "tailwind-merge";
import Container from "@/components/shared/container/Container";
import ServicesDecorations from "./ServicesDecorations";
import ServiceCard from "./ServiceCard";
import DesignToggle from "../designToggle/DesignToggle";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface ServicesListProps {
  className?: string;
  servicesList: Service[];
}

export default function ServicesList({
  className,
  servicesList,
}: ServicesListProps) {
  const t = useTranslations("servicesPage");
  const [designType, setDesignType] = useState<"normal" | "wow">("normal");

  return (
    <section className={twMerge(className, "relative")}>
      <ServicesDecorations />
      <Container>
        <div className="mb-8 lg:mb-12 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({ delay: 0.4, y: 30 })}
            className="text-[14px] lg:text-[16px] font-light leading-[122%] mb-4 lg:mb-0 max-w-[297px]"
          >
            {t("description")}
          </motion.p>
          <DesignToggle
            designType={designType}
            onDesignChange={setDesignType}
          />
        </div>
        <ul className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-9 items-stretch">
          {servicesList.map((service, idx) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={idx * 0.1}
              designType={designType}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
