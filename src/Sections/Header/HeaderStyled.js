import styled from 'styled-components';

export const AreaHeader = styled.div`
    grid-column: 1 / 15;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7vh;
    max-width: 1440px;
    position: fixed;
    background-color: transparent;
    z-index: 1030;


    &.navbar{
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      height: 7vh;
      width: 100%;
      max-width: 1440px;
      position: fixed;
      background-color: transparent;



    }

  &.active{
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    width: 100%;
    height: 7vh;
    max-width: 1440px;
 

  }

  @media (max-width: 768px) {
    position: absolute;
    background-color: #FFF;
  }


        .areaLinks {
            width: 86%;
            display: flex;
            position: absolute;
            justify-content: flex-end;
            align-items: center;
         
        


            @media (max-width: 768px) {
                display: flex;
                position: absolute;
                flex-direction: column;
                top: 0;
                left: 0;
                width: 75vw;
                z-index: 1030;
                height: 100vh;
                transform: translateX(-1000px);
                transition: .5s ease-out ;
                background-color: rgba(0, 0, 0, 0.8);
                justify-content: space-evenly;
                position: absolute;
            }


        }


        .areaButton {
            display: none;
            width: 10%;

            @media (max-width: 768px) {
                display: block;
                position: absolute;
                right: 0;
            }


            .buttonMenu {
                cursor: pointer;
                color: rgba(0, 0, 0, 0.5);
                font-size: 1.5rem;
                color: #FFF;
            }
        }


`;

export const StyledButton = styled.button`
    margin: 1rem;
    color: rgba(0, 0, 0, 0.5);
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.2rem;    
    cursor: pointer;
    color: #FFF;
    font-family: 'Roboto', sans-serif;

    :hover{
        border-bottom: 0.125rem solid #4884F9;
    }
`;


export const AreaImg = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    

        

    .imgbarber {
        grid-column: 1/13;
        grid-row: 1/13;
        width: 100%;
    }
`;


export const AreaItems = styled.div`
    grid-column: 2/7;
    grid-row: 4/9;


        @media(max-width: 768px) {
            grid-column: 1/13;
            grid-row: 6/10;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0.625rem;
        }


        .para {
            color: #FFF;
            font-size: 2.125rem;
            margin-bottom: 1.875rem;

            @media(max-width: 768px) {
                font-size: 1.875rem;
        }


        }

        .para2 {
            color: #FFF;
            font-size: 1rem;
            margin-bottom: 1.875rem;
            display: none;

            @media(min-width: 768px) {
                display: block;
            }
        }

        .agende {
            color: #FFF;
            font-size: 1rem;
            height: 3.063rem;
            width: 16rem;
            background-color: #4884F9;
            outline: none;
            border: none;
            border-radius: 0.2rem;
            text-align: center;
            cursor: pointer;


                
            @media(max-width: 768px) {
                height: 2.5rem;
                width: 10rem;
                font-size: 0.8rem;
            }

        }
`;



