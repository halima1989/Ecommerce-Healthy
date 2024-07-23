"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import { categoryType } from '@/utils/types';

const CategorySelect = ({ selectedCategory, onCategoryChange }: { selectedCategory: string, onCategoryChange: (categoryId: string) => void }) => {
    const [categories, setCategories] = useState<categoryType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3005/category/all');
                setCategories(response.data);
                setLoading(false);
            } catch (err: any) {
                setError('Failed to load categories');
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (event: { target: { value: any; }; }) => {
        onCategoryChange(event.target.value);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <RotatingLines
                    visible={true}

                // width="96"
                // height="97"
                // color="grey"
                // strokeWidth="5"
                // animationDuration="0.75"
                // ariaLabel="rotating-lines-loading"
                // wrapperStyle={{}}
                // wrapperClass=""
                />
            </div>
        );
    }
    return (
        <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
            </label>
            <select
                id="category"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            >
                <option value="">Select Category</option>
                {categories && categories.map((category: categoryType) => (
                    <option key={category.id} >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelect;
