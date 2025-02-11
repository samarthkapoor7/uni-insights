
export default function WhyStudyAbroad() {
  const benefits = [
    "World-class education",
    "Affordable tuition fees",
    "Global exposure",
    "Cultural diversity",
    "Advanced medical facilities",
  ]

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Study MBBS Abroad?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="bg-gray-100 p-4 rounded-lg flex items-center">
                            <svg
                              className="w-6 h-6 text-blue-600 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}