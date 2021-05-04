import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-color: #FFF;
`;

export const AreaText = styled.div`
    margin-top: 5.625;
    grid-column: 1/13;
    grid-row: 1/10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5.625rem;
    padding-bottom: 7.813rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    text-align: center;


        .line{
            width: 3.688rem;
            height: 0.2rem;
            background-color: #4884F9;
        }

        .services{
            font-weight: bold;
            font-size: 1.313rem;
            color: #000;
            padding-top: 1.25rem;
        }

        .services1{
            font-weight: bold;
            font-size: 2.125rem;
            color: #4884F9;
            padding-top: 1.25rem;
        }
`;

export const AreaInput = styled.form`
    grid-column: 1/13;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    margin-bottom: 5.625rem;

    .areainputs {
        grid-column: 2/14;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
            padding-bottom: 3.938rem;
        }
    }

    .linput {
        width: 100%;
        padding: 0.625rem;
    }

    .name {
        font-weight: bold;
        font-size: 1.313rem;
    }


    .areabutton {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column: 1/15;
    }
    
    .send {
        margin-top: 5.625rem;
        height: 3.438rem;
        width: 14.375rem;
        background-color: #4884F9;
        outline: none;
        border: none;
        border-radius: 0.2rem;
        text-align: center;
        cursor: pointer;
        color: #FFF;
        font-size: 1rem;
    }
`;

export const AreaFooter = styled.div`
    grid-column: 1/13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-color: #322C35;
    
`;

export const AreaContactmap = styled.div`
    grid-column: 3/11;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin-bottom: 26.875rem;
    

            @media(max-width: 768px) {
                grid-column: 2/12;
            }




        .areaC1 {
            grid-column: 1/10;
            background-color: #252127;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            padding-top: 7.5rem;

            @media(min-width: 768px) {
                grid-column: 1/5;
            }

        }

        .Areanameicon {
            margin-bottom: 1.25rem;
            grid-column: 1/5;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
            color: #4884F9;
            grid-column: 2;
            margin-right: 1rem;
        }

        .nameicon {
            font-size: 1rem;
            color: #FFF;
            grid-column: 3/6;
        }

        .areasocials {
            margin-top: 4.375rem;
            grid-column: 1/6;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 6.25rem;
        }

        .iconssocial {
            width: 1.5rem;
            height: 1.5rem;
            color: #4884F9;
            margin: 1.688rem;
            cursor: pointer;
        }

        .areaC2 {
            grid-column: 1/10;
            height: 80vh;

            @media(min-width: 768px) {
                grid-column: 5/10;
                height: 100%;
               
            }
        }
`;


export const Footer = styled.div`
   grid-column: 1/13;
   background-color: #252127;
   height: 4.375rem;

    .areasocialsfooter {
        display: flex;
        justify-content: center; 
        align-items: center;
        height: 100%;


            @media (max-width: 768px) {
                flex-direction: column;
            }
    }

    .areaiconssfooter {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 50%;
        height: 50%;
        margin-left: 2rem;

        @media (max-width: 768px) {
               width: 100%;
               justify-content: center;
               margin-left: 0rem;
        }
    }

    .iconssocialfooter {
        width: 1.5rem;
        height: 1.5rem;
        color: #4884F9;
        margin-right: 0.5rem;
        cursor: pointer;
    }

    .areacopy {
        width: 67%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        height: 80%;

        
        @media (max-width: 768px) {
               width: 100%;
               height: 50%;
               justify-content: center;
               align-items: flex-start;
            }
    }

    .namecopy {
        color: #FFF;
        font-size: 1rem;
    }
`;
