import React from 'react';
import './Home.css';

import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        
            <div className="home__row">
                <Product
                    id="123451"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={10}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc" 
                    />
          
                <Product
                    id="123452"
                    title="Addidas classic packpack"
                    price={749.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCcBmKVqkwJ4SGSRFmq2yZexKw482_W7HskHgPqABCc8OH49IHI0ZTaLBs6HrzrODXYIvzdwTX&usqp=CAc" 
                    />
            </div>        
           
            <div className="home__row">
                <Product
                    id="123453"
                    title="Keurig K-Slim Single Serve Coffee Maker"
                    price={69.99}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuNyVkyLnRedAxTgMn5onvWO1HmF5BLAcH0wRbWH_DE6dTFFX75-fk6j-dByupmL36JGnJ2S4&usqp=CAc" 
                    />
          
                <Product
                    id="123454"
                    title="Hoover Task Vac Lighteight Vacuum"
                    price={260}
                    rating={2}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeKLgnj629QHsGOAr0LSR0NsNXCW8qLuVTgC7zkyYDZ4QLuY3qMinQRUfLiBr_b8N74ejgRFyS&usqp=CAc" 
                    />
           
                <Product
                    id="123455"
                    title="Logitech Z906 Home Theater System"
                    price={411.95}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMvBW57wm1nrnCbH8mYKXaybGHBYRXfRRGhP8QMzK_GCXSu__fmKoAG9OtMOS_xgPuC1YrJdmP&usqp=CAc" 
                    />
            </div>    

            <div className="home__row">
            <Product
                    id="123456"
                    title="Shinola Men's Watch"
                    price={550.00}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxWpTJupTswVNh5_JUIA5P-OkvMurB_7775m6x1xDBZjwCSvXNRG7g-F0M&usqp=CAc" 
                    />
            </div>    

        </div>
    )
}

export default Home;
