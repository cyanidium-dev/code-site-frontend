import Founder from "@/components/homePage/founder/Founder";
import Hero from "@/components/homePage/hero/Hero";
import CodeSiteMarquee from "@/components/shared/marquee/CodeSiteMarquee";

export default function HomePage() {
  return (
    <>
      <div className="md:hidden">
        <CodeSiteMarquee className="w-[240vw] h-[32px] text-[31px] rotate-[4.369deg] bg-[linear-gradient(90deg,#D9E5FF_10.2%,#268DF4_59.69%)]" />
      </div>
      <Hero />
      <div className="hidden md:block">
        <CodeSiteMarquee className="h-[50px] text-[48px] rotate-0 bg-[linear-gradient(90deg,#D9E5FF_30.2%,#268DF4_59.69%)]" />
      </div>
      <Founder />
    </>
  );
}
