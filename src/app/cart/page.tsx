"use client";

import { useContext } from "react";
import { ContextCart } from "../../context/cartContext";
import Cartproduct from "../../components/CartProduct";
import Total from "../../components/Total";
import Checkout from "../../components/Checkout";

const Cart = () => {
    const { cart } = useContext(ContextCart);
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
                    Shopping Cart
                </h2>

                {cart &&
                    cart.map((article: any) => {
                        return <Cartproduct key={article.product.id} article={article} />;
                    })}
                <Total />
                <Checkout />
            </div>
        </section>
    );
};

export default Cart;