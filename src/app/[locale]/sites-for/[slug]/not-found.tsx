import { Link } from "@/i18n/navigation";
import Container from "@/components/shared/container/Container";

export default function NicheNotFound() {
  return (
    <section className="py-20 min-h-[60vh] flex items-center">
      <Container className="flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="font-actay text-[36px] lg:text-[56px] font-bold uppercase leading-tight">
          Ніша не знайдена
        </h1>
        <p className="max-w-[560px] text-[16px] leading-[150%] text-white/75">
          Можливо, посилання застаріло або сторінка ще готується. Подивіться
          список усіх ніш або поверніться на головну.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/sites-for"
            className="inline-flex items-center justify-center h-[48px] px-8 rounded-full bg-main-light text-white font-actay font-bold text-[14px] uppercase transition hover:opacity-90"
          >
            Усі ніші
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-[48px] px-8 rounded-full border border-white/40 text-white font-actay font-bold text-[14px] uppercase transition hover:bg-white/5"
          >
            На головну
          </Link>
        </div>
      </Container>
    </section>
  );
}
