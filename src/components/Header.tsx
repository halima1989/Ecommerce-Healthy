"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
    const { push } = useRouter();

    const handleLogout = () => {
        // Ici, ajoutez votre logique de déconnexion, par exemple effacer le token et rediriger
        localStorage.removeItem("token");
        push("/login");
    };

    return (
        <header className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 cursor-pointer" onClick={() => push('/')}>
                            <img
                                className="h-8"
                                src="https://logowik.com/content/uploads/images/healthy-lifestyle7736.logowik.com.webp"
                                alt="Logo"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-4">
                        <button
                            onClick={() => push('/cart')}
                            className="text-gray-300 hover:bg-gray-700 p-2 rounded-md"
                        >
                            <FaShoppingCart className="h-6 w-6" />
                        </button>
                        <button
                            onClick={() => push('/account')}
                            className="text-gray-300 hover:bg-gray-700 p-2 rounded-md"
                        >
                            <FaUser className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleLogout}
                            className="text-gray-300 hover:bg-gray-700 p-2 rounded-md"
                        >
                            <FaSignOutAlt className="h-6 w-6" />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
