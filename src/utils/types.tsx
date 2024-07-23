import { Dispatch, SetStateAction } from "react";

export type AuthRegisterDto = {
    name: string,
    address: string,
    email: string,
    password: string,

}

export type AuthLoginDto = {
    email: string;
    password: string;
}


export type UserFormType = {
    name: string;
    address: string;
    email: string;
    password: string;

};

export type productType = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    categoryId: string;
};

export type actionType = {
    type: any;
    payload: any;
};
export type stateType = {
    quantity: number;
    product: productType | null;

};

export type cartType = {
    product: productType | null;
    quantity: number;
};
export type ReducerCartType = {
    cart: cartType[];
    setcart: Dispatch<SetStateAction<cartType[]>>;
};

export type categoryType = {
    id: number;
    image: string;
    name: string;
};

export type userType = {
    id: number;
    name: string;
    email: string;
    address: string

}

export type CategoryListProps = {
    onCategoryChange: (category: string) => void;
};