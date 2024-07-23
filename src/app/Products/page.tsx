"use client";
import Header from "@/components/Header";
import Productslist from "@/components/ProductList";
import Wrapper from "@/components/Wrapper";

import React from "react";

const page = () => {
    return (
        <div className="bg-white">
            <Header />
            <Wrapper>
                <Productslist />
            </Wrapper>
            <Header />
        </div>
    );
};

export default page;
