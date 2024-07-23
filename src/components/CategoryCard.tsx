"use client"

import { categoryType } from "@/utils/types";
import React from "react";

const CategoryCard = ({
    category,
    setidcategory,
}: {
    category: categoryType;
    setidcategory: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
    return (
        <div className="flex gap-2 items-center p-1  cursor-pointer overflow-hidden rounded-md hover:bg-gray-400">
            <img
                src={category.image}
                className=" group-hover: scale-105 transition-all w-[40px] h-[40px] object-cover rounded-lg"
                alt="test"
            />
            <h3>{category.name}</h3>
        </div>
    );
};

export default CategoryCard;