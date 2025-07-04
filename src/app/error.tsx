'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaWrench, FaLaptopCode, FaBolt } from 'react-icons/fa';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

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
                        Oops!
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 font-germania">
                        Something went wrong
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Our kitchen encountered an unexpected error while preparing your request.
                    </p>

                    <p className="text-gray-500 text-sm">
                        Don&apos;t worry, our tech chefs are on it!
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={reset}
                            className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
                        >
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Go Home
                        </Link>
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
