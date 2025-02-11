import Hero from "@/components/Hero";
import WhyStudyAbroad from "@/components/WhyStudyAbroad";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <WhyStudyAbroad />
      <TopCountries />
    </main>
  )
}