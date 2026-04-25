import type { NicheLandingData } from "@/types/niche";
import { getNicheExtras } from "@/config/nicheExtras";
import BeforeAfterSection from "./BeforeAfterSection";
import BenefitsSection from "./BenefitsSection";
import TestimonialSection from "./TestimonialSection";
import NicheHero from "./NicheHero";
import NichePainPoints from "./NichePainPoints";
import NicheFeatures from "./NicheFeatures";
import NicheCases from "./NicheCases";
import NicheIntegrations from "./NicheIntegrations";
import NicheComparison from "./NicheComparison";
import NichePricing from "./NichePricing";
import NicheFaq from "./NicheFaq";
import NicheLeadMagnet from "./NicheLeadMagnet";
import NicheProjectForm from "./NicheProjectForm";

interface NicheLandingProps {
  data: NicheLandingData;
}

export default function NicheLanding({ data }: NicheLandingProps) {
  const extras = getNicheExtras(data.meta.slug);

  return (
    <>
      <NicheHero data={data.hero} />
      <NichePainPoints data={data.painPoints} />
      {extras?.beforeAfter ? (
        <BeforeAfterSection data={extras.beforeAfter} />
      ) : null}
      {extras?.benefits ? <BenefitsSection data={extras.benefits} /> : null}
      {extras?.testimonial ? (
        <TestimonialSection data={extras.testimonial} />
      ) : null}
      <NicheFeatures data={data.features} />
      <NicheCases data={data.cases} />
      <NicheIntegrations data={data.integrations} />
      <NicheComparison data={data.comparison} />
      {extras?.projectForm ? (
        <NicheProjectForm data={extras.projectForm} slug={data.meta.slug} />
      ) : null}
      <NichePricing data={data.pricing} />
      <NicheFaq data={data.faq} />
      <NicheLeadMagnet data={data.leadMagnet} slug={data.meta.slug} />
    </>
  );
}
