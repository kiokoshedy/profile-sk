import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Tittle';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import { DesktopMac } from '@material-ui/icons';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={' '} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Backend Development'} 
                        paragraph={'This is the server side of an application and everything that communicates between the database and the browser.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Web Development'} 
                            paragraph={'Developing a Web based platform for the Internet (World Wide Web) or an intranet (a private network).JSF, Primefaces, Vaadin.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Frontend'} 
                        paragraph={'Development of the graphical user interface of a website, through the use of HTML, CSS, JS, and Bootstrap so that users can view and interact with that website.'}
                    />
                    <ServiceCard 
                        image={intelligence} 
                        title={'Android'} 
                        paragraph={'Developing applications for devices running the Android operating system either using Java or Kotlin.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
