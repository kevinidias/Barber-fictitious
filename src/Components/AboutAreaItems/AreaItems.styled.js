import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Image = styled.img`
        margin-bottom: 0rem;
        max-width: 3.125rem;
        max-height: 3.125rem;

        
        @media(min-width: 768px) {
            max-height: 4.688rem;
            max-width: 4.688rem;
            margin-bottom: 1.875rem;
        }
`;

export const Comment = styled.p`
        font-weight: bold;
        font-size: 1rem;
        color: #FFF;
        margin-bottom: 0rem;


        @media(min-width: 768px) {
            margin-bottom: 1.875rem;
            font-size: 1.625rem;
        }
`;

export const Name = styled.p`
       font-size: 0.9rem;
        color: #FFF;
     

        @media(min-width: 768px) {
            margin-bottom: 1.875rem;
            font-size: 1.313rem;
        }
`;