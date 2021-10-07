import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Tittle';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={' '} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'Shady is a passionate and adventurous Software Developer ~ James Marwa.'} 
                    />
                    <ReviewItem 
                        text={'Kioko is a quick learner and team oriented always working for the success of team work ~ Francis Dil.'} 
                    />
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
