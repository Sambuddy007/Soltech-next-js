const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <h1 className="text-center text-2xl py-4">Soltech</h1>
            <ul className="flex justify-center space-x-4">
                <li><a className="text-blue-500 hover:text-blue-700" href="/">About</a></li>
                <li><a className="text-blue-500 hover:text-blue-700" href="/services">Services</a></li>
                <li><a className="text-blue-500 hover:text-blue-700" href="/customers">Customers</a></li>
                <li><a className="text-blue-500 hover:text-blue-700" href="/pricing">Pricing</a></li>
                <li><a className="text-blue-500 hover:text-blue-700" href="/faq">FAQs</a></li>
                <li><a className="text-blue-500 hover:text-blue-700" href="/en">En</a></li>
                <li><a className="text-blue-500 hover:text-blue-700" href="/get-started">Get Started</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
