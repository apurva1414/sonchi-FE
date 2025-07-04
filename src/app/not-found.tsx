import Link from 'next/link'
import Image from 'next/image'
import { FaWrench, FaLaptopCode, FaBolt } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <Image
                        src="/assets/sonchi-logo.svg"
                        alt="Sonchi Logo"
                        width={120}
                        height={60}
                        className="mx-auto"
                    />
                </div>

                <div className="space-y-4">
                    <div className="text-6xl font-bold text-red-700 font-germania">
                        404
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 font-germania">
                        Page Not Found
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Oops! The page you&apos;re looking for seems to have wandered off the menu.
                    </p>

                    <p className="text-gray-500">
                        Don&apos;t worry, our chefs are working hard to serve you the best experience.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
                    >
                        Back to Home
                    </Link>

                    <div className="text-sm text-gray-500">
                        Or explore our delicious offerings on the homepage
                    </div>
                </div>

                <div className="pt-8">
                    <div className="flex justify-center space-x-6 text-gray-400">
                        <FaWrench className="text-4xl" />
                        <FaLaptopCode className="text-4xl" />
                        <FaBolt className="text-4xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
