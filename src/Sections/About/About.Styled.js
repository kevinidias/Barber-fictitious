import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding-top: 5.625rem;
    padding-bottom: 1.5rem;
`;

export const AreaAbout = styled.div`
    grid-column: 1/13;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.625rem;

    @media(min-width: 769px) {
        grid-column: 2/7;
        align-items: flex-start;
    }

    .line {
        width: 3.688rem;
        height: 0.2rem;
        background-color: #4884F9;
        margin-bottom: 1.25rem;
    }

    .aboutname {
        font-size: 1.313rem;
        font-weight: bold;
        margin-bottom: 1.25rem;
        color: #000;
    }

    .welcome {
        font-size: 1.875rem;
        font-weight: bold;
        color: #4884F9;
        margin-bottom: 1.875rem;
        text-align: center;
    }

    .textabout {
        font-size: 1rem;
        color: #000;
    }

    
`;

export const AreaImg = styled.div`
      grid-column: 1/13;
      padding: 5px;
      


      @media(min-width: 769px) {
        grid-column: 8/12;
            
    }

    .img2{ 
        height: 100%;
        width: 100%;
        max-height: 170px;
        

        @media(min-width: 768px) {
            min-height: 250px;
        }
    }
`;


export const AreaImg2 = styled.div`

    grid-column: 1/13;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 1rem;

    

        @media(min-width: 769px) {
          padding: 0;
          margin-top: 10rem;
        }

    
    .img3 {
            grid-column: 1 / 13;
            grid-row: 1/13;
            width: 100%;
            min-height: 170px;
            


            @media(min-width: 768px) {
                min-height: 300px;
            }
        }

`;

export const AreaItems = styled.div`
    grid-column: 1/13;
    grid-row: 1/13;
    padding: 0.625rem;
    background: rgba(0,0,0,0.6);
`;


