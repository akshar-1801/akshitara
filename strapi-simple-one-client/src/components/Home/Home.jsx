import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = async () => {
        const res = await fetchDataFromApi("/api/products");
        // console.log('Products:', res); // Verify data
        setProducts(res);
    };

    const getCategories = async () => {
        const res = await fetchDataFromApi("/api/category");
        // console.log('Categories:', res); // Verify data
        setCategories(res);
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
