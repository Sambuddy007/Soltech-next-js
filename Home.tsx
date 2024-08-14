const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="header text-center mb-10">
                <h1 className="text-4xl">SOLTECH</h1>
                <p className="text-gray-600">Grow your business with marketing tools</p>
            </div>
            <div className="video-section text-center mb-10">
                <h2>Handling your marketing needs in a better way</h2>
                <div className="video bg-gray-200 p-4 inline-block rounded">
                    <h3>The perfect analytics tool for your business</h3>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">▶ Play Video</button>
                </div>
            </div>
            <div className="stats flex justify-around">
                <div className="stat text-center">
                    <h2 className="text-2xl">26.8k</h2>
                    <p>Audience Reach</p>
                </div>
                <div className="stat text-center">
                    <h2 className="text-2xl">8,726</h2>
                    <p>Engagements</p>
                </div>
                <div className="stat text-center">
                    <h2 className="text-2xl">54.7%</h2>
                    <p>Conversion Rate</p>
                </div>
                <div className="stat text-center">
                    <h2 className="text-2xl">19.46%</h2>
                    <p>Growth Rate</p>
                </div>
                <div className="stat text-center">
                    <h2 className="text-2xl">46.3k</h2>
                    <p>Impressions</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
