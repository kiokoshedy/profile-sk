import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSelection';
import Title from '../Components/Tittle';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSelection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={' '} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
