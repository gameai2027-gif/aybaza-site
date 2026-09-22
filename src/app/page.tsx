import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ProblemSolution } from "@/components/ProblemSolution";
import { TrustBar } from "@/components/TrustBar";
import { Advantages } from "@/components/Advantages";
import { Brands } from "@/components/Brands";
import { PopularCars } from "@/components/PopularCars";
import { Calculator } from "@/components/Calculator";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { WhyUs } from "@/components/WhyUs";
import { ServiceArea } from "@/components/ServiceArea";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: SITE.name,
    alternateName: SITE.shortName,
    description:
      "Импорт автомобилей из Китая, Кореи и ОАЭ с доставкой в Уфу и Республику Башкортостан. Audi, BMW, Mercedes, Toyota, Lexus, Li Auto, Zeekr и другие бренды.",
    url: "https://aybaza.ru",
    telephone: SITE.phoneHref.replace("tel:", ""),
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: SITE.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main>
        <Hero />
        <StatsBar />
        <ProblemSolution />
        <TrustBar />
        <Advantages />
        <Brands />
        <PopularCars />
        <HowItWorks />
        <Calculator />
        <Reviews />
        <FAQ />
        <WhyUs />
        <ServiceArea />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
