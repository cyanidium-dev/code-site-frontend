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

      {/* Gradient ovals (iOS: single div like original, color→transparent + opacity) */}
      <div
        className="absolute -z-20 left-[-290px] lg:left-[-312px] bottom-[28px] lg:bottom-[34px] w-[360px] lg:w-[596px] h-[363px] lg:h-[600px] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,#0C96FA_0%,transparent_70%)]"
        aria-hidden
      />
      <div
        className="hidden lg:block absolute -z-20 right-[-151px] bottom-[166px] w-[483px] h-[483px] rounded-full opacity-60 bg-[radial-gradient(ellipse_at_center,#9D5280_0%,transparent_70%)]"
        aria-hidden
      />
    </div>
  );
}

