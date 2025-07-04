'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaYoutube,
} from 'react-icons/fa';
import {
    FiPhone,
    FiMail,
    FiMapPin,
} from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[#BB1D1D] text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Image src="/assets/sonchi-light-logo.svg" alt="Sonchi Logo" width={140} height={43} />
                    </div>
                    <p>
                        As a restaurateur, I appreciate the wealth of culinary knowledge
                        and inspiration I gain from this website.
                    </p>
                    <form className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md shadow-lg px-2 py-2">
                        <input
                            type="email"
                            placeholder="Enter your email id"
                            className="flex-1 text-red-700 placeholder-[#BB1D1DCC]/80 text-sm outline-none bg-transparent px-2"
                        />
                        <button
                            type="submit"
                            className="bg-[#BB1D1D] text-white font-semibold text-sm px-6 py-2 rounded-full hover:bg-red-800 transition"
                        >
                            Submit
                        </button>
                    </form>
                    <Image
                        src="/assets/make-in-indIa-logo.svg"
                        alt="Make in India"
                        width={100}
                        height={40}
                        className="mt-3"
                    />
                </div>

                <div>
                    <h3 className="font-semibold text-xl tracking-[0.3em] font-manrope uppercase mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {[
                            'About Us',
                            'Cuisines',
                            'Host',
                            'Blogs',
                            'Our Services',
                            'Customer Reviews',
                            'Meet Our Team',
                            'Become a Host',
                            'Contact Us',
                        ].map((item, i) => (
                            <li key={i}>
                                <Link href="#" className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-xl tracking-[0.3em] font-manrope uppercase mb-4">Opening</h3>
                    <div className="space-y-2">
                        <p>
                            <strong>Monday - Saturday</strong>
                            <br />
                            09:00 AM - 09:00 PM
                        </p>
                        <p>
                            <strong>Sunday</strong>
                            <br />
                            11:00 AM - 08:00 PM
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-xl tracking-[0.3em] font-manrope uppercase mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <FiPhone className="text-lg" />
                            <span>+91 7879088134</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FiMail className="text-lg" />
                            <span>inforsonchi@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FiMapPin className="text-lg" />
                            <span>Vijay Nagar, Indore, India</span>
                        </li>
                    </ul>
                    <h3 className="font-semibold mt-6 mb-3">Follow Us On</h3>
                    <div className="flex gap-3 text-lg">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaWhatsapp />
                        <FaYoutube />
                    </div>
                </div>
            </div>

            <div className="bg-[#F2ECE0] text-center text-[13px] text-[#BB1D1D] py-3 px-4 flex flex-col md:flex-row items-center justify-between gap-2">
                <p>Copyright ©{new Date().getFullYear()}. All Rights Reserved. Sonchi</p>
                <div className="flex gap-4 text-red-600">
                    <Link href="#">Community Guidelines</Link>
                    <span className="hidden md:inline">•</span>
                    <Link href="#">Terms & Conditions</Link>
                    <span className="hidden md:inline">•</span>
                    <Link href="#">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
