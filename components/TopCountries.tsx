import Image from "next/image"

export default function TopCountries() {
    const countries = ["Russia", "Uzbekistan", "Kazakhstan", "Philippines", "Georgia", "Kyrgyzstan", "Egypt"]

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Top Countries for MBBS</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {countries.map((country, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                            <Image
                                src={`/${country}.jpg`}
                                alt={`${country} flag`}
                                width={100}
                                height={100}
                                className="mx-auto mb-4 rounded-full"
                                unoptimized
                                />
                            <h3 className="font-semibold">{country}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}