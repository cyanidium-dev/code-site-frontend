import CTA from "@/components/homePage/cta/CTA";
import FAQ from "@/components/homePage/faq/FAQ";
import Founder from "@/components/homePage/founder/Founder";
import Hero from "@/components/homePage/hero/Hero";
import Partners from "@/components/homePage/partners/Partners";
import SiteTypes from "@/components/homePage/siteTypes/SiteTypes";
import WhyUs from "@/components/homePage/whyUs/WhyUs";
import CodeSiteMarquee from "@/components/shared/marquee/CodeSiteMarquee";

export default function HomePage() {
  return (
    <>
      <div className="md:hidden">
        <CodeSiteMarquee className="w-[240vw] text-[31px] leading-none rotate-[4.369deg] bg-[linear-gradient(90deg,#D9E5FF_10.2%,#268DF4_59.69%)]" />
      </div>
      {/* <Hero /> */}
      {/* <div className="hidden md:block">
        <CodeSiteMarquee className="text-[48px] leading-none rotate-0 bg-[linear-gradient(90deg,#D9E5FF_30.2%,#268DF4_59.69%)]" />
      </div> */}
      <Founder />
      <WhyUs />
      <SiteTypes />
      <Partners />
      <FAQ />
      <CTA />
    </>
  );
}
