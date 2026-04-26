import Image from "next/image";
import type { TestimonialData } from "@/types/nicheExtras";
import MockupArt from "./MockupArt";

interface TestimonialSectionProps {
  data: TestimonialData;
}

export default function TestimonialSection({ data }: TestimonialSectionProps) {
  const initials = getInitials(data.authorName);

  return (
    <section className="services">
      <div className="services-bg" />
      <div className="services-inner">
        <article className="testimonial">
          <div className="testimonial-visual">
            <div className="relative w-full h-full">
              {data.imagePath ? (
                <Image
                  src={data.imagePath}
                  alt={data.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  unoptimized
                />
              ) : data.mockup ? (
                <MockupArt kind={data.mockup} className="w-full h-full" />
              ) : null}
            </div>
          </div>

          <div className="testimonial-text">
            {data.eyebrow ? (
              <p className="testimonial-eyebrow">
                <span className="testimonial-eyebrow-dot" />
                {data.eyebrow}
              </p>
            ) : null}
            <span aria-hidden="true" className="testimonial-mark">
              “
            </span>
            <blockquote className="testimonial-quote">
              {data.quote}
            </blockquote>
            <div className="testimonial-author">
              <span className="testimonial-avatar">
                {initials}
              </span>
              <div>
                <p className="testimonial-author-name">
                  {data.authorName}
                </p>
                <p className="testimonial-author-role">
                  {data.authorRole}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function getInitials(fullName: string): string {
  return fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
