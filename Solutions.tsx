const Solutions = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="header text-center mb-10">
                <h1 className="text-4xl font-bold">Data-driven Digital Marketing</h1>
                <p className="text-gray-600">Innovative solutions that work</p>
            </div>
            <div className="solutions grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="solution bg-gray-100 p-4 rounded shadow">
                    <h2 className="font-semibold">Digital Marketing</h2>
                    <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor.</p>
                </div>
                {/* Repeat for other solutions */}
            </div>
            <div className="summary text-center mt-10">
                <h2 className="text-2xl font-semibold">Cutting-edge solutions for your online business</h2>
                <p className="text-gray-600">Suspendisse potenti. Cras in ligula a magna cursus blandit.</p>
            </div>
            <div className="chart text-center mt-10">
                <img className="mx-auto" src="https://via.placeholder.com/600x300" alt="Analytics Chart" />
            </div>
        </div>
    );
};

export default Solutions;
