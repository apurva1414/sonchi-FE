'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cuisine', href: '/cuisine' },
    { name: 'Host', href: '/host' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
];

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

                <div className="flex items-center gap-2">
                    <Image src="/assets/sonchi-logo.svg" alt="Sonchi Logo" width={212} height={65}   className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-[212px] h-auto" />
                </div>

                <nav className="hidden md:flex gap-6 text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:text-red-500 transition-colors ${pathname === link.href ? 'text-[#BB1D1D] font-bold' : 'text-gray-700'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/"
                        className="px-5 py-1.5 border border-red-600 text-red-600 rounded-full hover:bg-red-100 text-sm"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="/"
                        className="px-5 py-1.5 bg-red-700 text-white rounded-full hover:bg-red-800 text-sm"
                    >
                        Log In
                    </Link>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-md border-t">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block text-sm py-1 ${pathname === link.href ? 'text-red-600 font-medium' : 'text-gray-700'
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex flex-col gap-2 pt-3">
                        <Link
                            href="/"
                            className="px-4 py-2 border border-red-600 text-red-600 rounded-full text-sm text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="/"
                            className="px-4 py-2 bg-red-600 text-white rounded-full text-sm text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
