import './globals.css';
import Navbar from './components/navbar'; // Make sure the path is correct
import Footer from './components/footer'; // Make sure the path is correct
import React, { ReactNode } from 'react';

// Define the props type
interface LayoutProps {
    children: ReactNode; // This specifies that children can be any React node
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
