import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Advantages } from "@/components/Advantages";
import { PopularCars } from "@/components/PopularCars";
import { Calculator } from "@/components/Calculator";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { WhyUs } from "@/components/WhyUs";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDealer",
            name: "ООО АЙБАЗА",
            description:
              "Импорт автомобилей из Китая, Кореи и Японии с доставкой в Уфу и Башкортостан",
            url: "https://aybaza.ru",
            telephone: "+7-347-200-00-00",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ул. Ленина, 45",
              addressLocality: "Уфа",
              addressRegion: "Республика Башкортостан",
              postalCode: "450000",
              addressCountry: "RU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 54.7351,
              longitude: 55.9587,
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
                "Sunday",
              ],
              opens: "09:00",
              closes: "21:00",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Республика Башкортостан",
            },
          }),
        }}
      />

      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Advantages />
        <PopularCars />
        <Calculator />
        <HowItWorks />
        <Reviews />
        <WhyUs />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
