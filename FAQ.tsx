const FAQ = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="header text-center mb-10">
                <h1 className="text-4xl font-bold">Any Questions? Look Here</h1>
                <p className="text-gray-600">Ligula risus auctor tempus magna feugiat lacinia fusce blandit.</p>
            </div>
            <div className="faq-section">
                <div className="faq mb-4">
                    <h3 className="cursor-pointer font-semibold">Getting started with Soltech</h3>
                    <p className="hidden">Tempor sapien sodales quaerat ipsum congue urna lacinia turpis.</p>
                </div>
                {/* Repeat for other FAQs */}
            </div>
        </div>
    );
};

export default FAQ;
