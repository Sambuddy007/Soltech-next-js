const Integrations = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="header text-center mb-10">
                <h1 className="text-4xl font-bold">Explore Integrations</h1>
                <p className="text-gray-600">Your favorite tools are already here.</p>
            </div>
            <div className="integrations grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="integration bg-gray-100 p-4 rounded shadow">
                    <h3 className="font-semibold">Slack</h3>
                    <p>Integrate with Slack for seamless communication.</p>
                </div>
                {/* Repeat for other integrations */}
            </div>
        </div>
    );
};

export default Integrations;
