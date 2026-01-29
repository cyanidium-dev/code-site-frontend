"use client";

import Image from "next/image";

export default function FAQDecorationsStatic() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* QA */}
      <div className="absolute top-[291px] lg:top-[116px] right-[-93px] lg:right-[-61px]">
        <Image
          src="/images/homePage/faq/qa.svg"
          alt="qa"
          width={180}
          height={157}
          className="w-[180px] lg:w-[231px] h-auto"
        />
      </div>

      {/* Questions */}
      <div className="absolute bottom-[-85px] lg:bottom-[85px] right-[-149px] lg:right-[-99px]">
        <Image
          src="/images/homePage/faq/questions.svg"
          alt="questions"
          width="267"
          height="201"
        />
      </div>

      {/* Tag */}
      <div className="absolute top-[280px] lg:top-[143px] left-[-86px] lg:left-[17px]">
        <Image
          src="/images/homePage/faq/tag.svg"
          alt="tag"
          width={180}
          height={157}
          className="w-[142px] lg:w-[284px] h-auto rotate-[-10deg] lg:rotate-[-30px]"
        />
      </div>

      {/* DropsDesk (desktop) */}
      <div className="hidden lg:block absolute left-0 bottom-[-87px]">
        <Image
          src="/images/homePage/faq/dropsDesk.svg"
          alt="drops"
          width={263}
          height={130}
        />
      </div>

      {/* DropsMob (mobile) */}
      <div className="lg:hidden absolute bottom-[-15px] left-[-10px]">
        <Image
          src="/images/homePage/faq/dropsMob.svg"
          alt="drops"
          width={179}
          height={130}
        />
      </div>

      {/* DropsBottom */}
      <div className="hidden lg:block absolute bottom-[-267px] right-[-67px]">
        <Image
          src="/images/homePage/faq/dropsBottom.svg"
          alt="drops"
          width="385"
          height="389"
        />
      </div>

      {/* Blue blur */}
      <div className="absolute -z-20 bottom-[-73px] lg:bottom-[109px] left-[-245px] lg:left-[-238px]">
        <div className="w-[271px] lg:w-[448px] h-[273px] lg:h-[451px] 2xl:opacity-50 rounded-full bg-[#0C96FA] supports-[backdrop-filter]:blur-[195px] lg:supports-[backdrop-filter]:blur-[323px] " />
      </div>

      {/* Pink blur */}
      <div className="hidden lg:block absolute -z-20 bottom-[226px] right-[-272px]">
        <div className="w-[363px] h-[363px] 2xl:opacity-50 rounded-full bg-[#9D5280] supports-[backdrop-filter]:blur-[163px] " />
      </div>
    </div>
  );
}

