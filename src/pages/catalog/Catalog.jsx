import React from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProductsList from "../../components/productsComponents/productsList/productsList";

const Catalog = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <ProductsList />
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Catalog;
