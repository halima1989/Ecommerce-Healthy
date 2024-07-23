"use client";
import { useEffect, useState } from "react";

import { getAllProducts } from "@/services/getProducts";
import { productType } from "@/utils/types";
import ProductCard from "./ProductCard";

const Productslist = () => {
    const [products, setproducts] = useState<productType[]>([]);
    const [loading, setloading] = useState(true);
    console.log(products)

    useEffect(() => {
        const getData = async () => {
            const response = await getAllProducts;
            setproducts(response.data);
        };
        getData();
    }, []);

    return (
        <div className="flex flex-col justify-between items-center">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                {products &&
                    products.map((product: productType) => {
                        return <ProductCard key={product.id} product={product} />;
                    })}
            </div>
        </div>
    );
};

export default Productslist;