
export default function AdmissionProcess() {
  const steps = [
    { title: "Research", description: "Explore universities and programs" },
    { title: "Eligibility Check", description: "Ensure you meet the requirements" },
    { title: "Document Preparation", description: "Gather all necessary documents" },
    { title: "Application Submission", description: "Apply to your chosen universities" },
    { title: "Visa Process", description: "Apply for a student visa" },
    { title: "Pre-departure Preparation", description: "Get ready for your journey" },
  ]

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Admission Process & Eligibility</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div key={index}
                        className="bg-gray-100 p-6 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600 mb-2">
                                {index + 1}
                            </div>
                            <h3 className="font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}