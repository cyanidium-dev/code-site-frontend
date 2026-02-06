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
    </div>
  );
}

