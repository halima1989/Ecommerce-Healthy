import { productType } from "@/utils/types";
import axios from "axios";
import headers from "next/headers";

// const token = window.localStorage.getItem("token");
// console.log(token);

const axiosCreate = axios.create({
  baseURL: "http://localhost:3005/",

  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = axiosCreate.get("product/all");

export const getOneProduct = (id: number) => axiosCreate.get(`product/${id}`);

export const getCategoryProduct = (categoryId: number) =>
  axiosCreate.get(`/category/${categoryId}`);

export const searchOneProduct = (id: number | null, search: string) =>
  axiosCreate.get(`product/search/${search}`);

export const addProduct = (productData: productType) =>
  axiosCreate.post("product/new", productData);

export const updateProduct = (id: number, productData: productType) =>
  axiosCreate.patch(`product/update/${id}`, productData);

export const deleteProduct = (id: number) =>
  axiosCreate.delete(`product/delete/${id}`);
