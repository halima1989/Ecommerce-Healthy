"use client"

import { categoryType } from "@/utils/types";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { getCategoryList } from "@/services/getProducts";


const CategoryList = ({
    setidcategory,
}: {
    setidcategory: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
    const [categoryList, setcategoryList] = useState<categoryType[]>([]);
    useEffect(() => {
        const getcategorys = async () => {
            const response = await getCategoryList;
            setcategoryList(response.data.results);
        };
        getcategorys();
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <h2>categorys</h2>
            <div className="flex flex-col justify-center">
                {categoryList.map((category: categoryType) => (
                    <CategoryCard key={category.id} category={category} setidcategory={setidcategory} />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
