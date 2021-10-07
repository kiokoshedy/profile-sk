import React from 'react'
import styled from 'styled-components';
import resume from '../img/portImages/resume pic.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4> <span>Shadrack Kioko</span></h4>
                <p className="paragraph">
                A passionate, adaptable and committed Software Developer who believes that today’s problems can be solved with technology. 
                I am therefore constantly exploring new technologies to strengthen and expand my skills in software development.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Shadrack Kioko</p>
                        <p>: 28 Years</p>
                        <p>: Kenyan </p>
                        <p>: English, Swahili </p>
                        <p>: Nairobi, Kenya</p>
                        <p>: Software Developer</p>
                    </div>
                </div>
                <PrimaryButton title={'GitHub'} href="https://github.com/kiokoshedy"/>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
