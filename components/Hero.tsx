import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Study MBBS Abroad</h1>
                <p className="text-xl mb-8">Pursue your medical dreams in top international universities</p>
                <Link
                  href="#lead-form"
                  className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
                >
                  Apply Now for MBBS Abroad
                </Link>
            </div>
        </section>
    )
}