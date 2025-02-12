import AdmissionProcess from "@/components/AdmissionProcess";
import Hero from "@/components/Hero";
import TopCountries from "@/components/TopCountries";
import WhyStudyAbroad from "@/components/WhyStudyAbroad";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <WhyStudyAbroad />
      <TopCountries />
      <AdmissionProcess />
      <LeadForm />
    </main>
  )
}