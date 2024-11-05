;
import React from 'react';
import { userType } from '../../utils/types';

const page = ({ user }: { user: userType }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">My Account</h2>
                <div className="flex justify-center mb-6">
                    <img
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Ffr%2Fvectors%2Fdefault-profile-picture.html&psig=AOvVaw0IkqO1dVYray5QcSEd6_pF&ust=1721768859342000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDj_P_Gu4cDFQAAAAAdAAAAABAE" // Placeholder image
                        alt="Profile"
                        className="h-24 w-24 rounded-full object-cover"
                    />
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">{user.name}</label>
                        <input
                            type="text"
                            value="John Doe"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">{user.email}</label>
                        <input
                            type="email"
                            value="jeanjacques@example.com"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">{user.id}</label>
                        <input
                            type="password"
                            value="********"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">{user.address}</label>
                        <input
                            type="text"
                            placeholder="Enter your address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
