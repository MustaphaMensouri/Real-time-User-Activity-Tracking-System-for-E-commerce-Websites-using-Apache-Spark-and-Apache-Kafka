import React from 'react';
import CategoryBanner from '../Categories/CategoryBanner.jsx';
import Card from '../Categories/Cards/Card.jsx';
import { CategoryProvider } from '../Categories/CategoryContext.js';
import MainSection from '../Section1/MainSection.jsx'
import Footer from '../Footer/Footer.jsx'


const Home = () => {
    return (
        <>
            <CategoryProvider >
                <MainSection />
                <CategoryBanner />
                <Card />
                <Footer />
            </CategoryProvider>
        </>
    );
};

export default Home;