import React from "react";
import "./css/Home.css";
import Product from "../components/Product";

function Home() {
    return(
        <div className="home">
            <div className="home_container">
                <img 
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
                    alt=""
                /> 
                <div className="home_row">
                    <Product 
                        id='1'
                        title="Sony PlayStation5 Console + Residental Evil 4"
                        price={169.99}
                        image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/s/o/sony-playstation-5-console-resident-evil-village-lendticular-sleeve-nba-2k22-game-standard-edition-cod-vanguard-back-4-blood-special-edition.jpg"
                        rating={5}
                    />
                    <Product 
                        id='2'
                        title="DELL Alienware 6GB Geforce RTX2060 Core i7"
                        price={734.900}
                        image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/l/a/laptop-alienware-15-mlk-pdp-8.jpg"
                        rating={4}
                    />
                    <Product 
                        id='3'
                        title="Funko POP! Games: Fortnite Midas Metallic..."
                        price={6.550}
                        image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/f/u/fu52973_funko.jpg"
                        rating={3}
                    />
                </div>  
                <div className="home_row">
                    <Product 
                        id='4'
                        title="Funko Pocket Pop & Tee: Fortnite >> Love..."
                        price={12.000}
                        image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/1/5/1587147377628079363-800x800_726_821.jpg"
                        rating={2}
                    />
                    <Product 
                        id='5'
                        title="Apple iPhone 13 Pro Max 256GB - Gold (Dual SIM)"
                        price={394.000}
                        image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/a/_/a_7_3.jpg"
                        rating={5}
                    />
                </div>  
                <div className="home_row">
                    <Product 
                        id='6'
                        title="Samsung 49inch' Curved LED Gaming Monitor = Super Ultra Wide"
                        price={1094.98}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={5}
                    />
                </div> 
            </div>
        </div>
        
    )
}

export default Home;