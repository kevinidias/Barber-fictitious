import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-color: #322C35;
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
            color: #FFF;
            padding-top: 1.25rem;
        }

        .services1{
            font-weight: bold;
            font-size: 2.125rem;
            color: #4884F9;
            padding-top: 1.25rem;
        }
`;

export const AreaSpecialty = styled.div`
    grid-column: 2/12;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5.938rem;


        @media(min-width: 768px) {
            flex-direction: row;
        }

        .img1{
            height: 10rem;
            width: 10rem;
            margin-bottom: 3.625rem;
            color: #4884F9;
        }

        .img2{
            height: 10rem;
            width: 10rem;
            margin-bottom: 3.625rem;
            color: #4884F9;
        }

        .img3{
            height: 10rem;
            width: 10rem;
            margin-bottom: 3.625rem;
            color: #4884F9;
        }

        .img4{
            height: 10rem;
            width: 10rem;
            margin-bottom: 3.625rem;
            color: #4884F9;
        }
`;

export const AreaList = styled.div`
    background-color: #252127;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1/13;

        .list1{
            grid-column: 2/13;
            padding-top: 4.563rem;

            @media (min-width: 768px) {
                grid-column: 2/6;
            }
        }

        .listc {
            color: #FFF;
            font-size: 1rem;
            padding-bottom: 0.375rem;
        }

        .classic {
            color: #4884F9;
            font-size: 1.313rem;
            padding-bottom: 2.125rem;
        }

        .list11 {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .side {
            color: #FFF;
            font-size: 1rem;
            padding-bottom: 1.5rem;
            width: 33.333%;
            
        }

        .line {
            width: 33.333%;
            height: 0.2rem;
            background-color: #000;
            margin-bottom: 2rem;
        }

        .price {
            color: #FFF;
            font-size: 1rem;
            color: #4884F9;
            padding-bottom: 1.5rem;
            width: 33.333%;
            text-align: center;

        }


        .list2{
            grid-column: 2/13;
            padding-top: 4.563rem;

            @media (min-width: 768px) {
                grid-column: 8/12;
            }
        }
`;

export const AreaPhotos = styled.div`
    background-color: #FFF;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1/13; 
    padding-top: 6.25rem;

    .Areatitle{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        grid-column: 1/13;
        margin-bottom: 4.063rem;    
    }

    .line2 {
        width: 3.688rem;
        height: 0.2rem;
        background-color: #4884F9;
        margin-bottom: 1.25rem;
    }

    .title1 {
        font-size: 1.313rem;
        color: #000;
        margin-bottom: 1.25rem;
        text-align: center;
    }

    .title2 {
        font-size: 2.125rem;
        color: #4884F9;
    }

    .Areacarousel {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column: 2/12;
    }

    .AreacarouselItems {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media(min-width: 768px) {
            flex-direction: row;
        }
    }

    .img11{
        height: 10rem;
        width: 10rem;
        margin-bottom: 3.625rem;
        color: #4884F9;
    }
`;

export const AreaImg = styled.div`
    grid-column: 1/13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);


        @media(min-width: 769px) {
            margin-top: 5rem;
        }

    .img44 {
        grid-column: 1/13;
        grid-row: 1/13;
        width: 100%;
        min-height: 170px;

        @media(min-width: 768px) {
            min-height: 300px;
        }
    }
`;

export const AreaItems33 = styled.div`
    grid-column: 1/13;
    grid-row: 1/13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 0.625rem;
    background: rgba(0,0,0,0.4);

    .text33 {
        grid-column: 2/6;
        grid-row: 3;
        font-size: 1.938rem;
        font-weight: bold;
        color: #FFF;
        text-align: center;

        @media (max-width: 768px) {
            grid-column: 1/13;
            grid-row: 3;
            font-size: 1.2rem;
        }
    }

    .buttona {
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
            grid-column: 9/12;
            grid-row: 3;

            
        @media (max-width: 768px) {
            grid-column: 6/7;
            grid-row: 5;
            height: 2.5rem;
            width: 10rem;
            font-size: 0.8rem;
        }
    }
`;

export const AreaText2 = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1/13;
    background-color: #322C35;
    padding-top: 6.25rem;
    padding-bottom: 5rem;

    .areahouse {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        grid-column: 2/12;


        @media (min-width: 768px){
            grid-column: 4/10;
        }
    }

    

    .line1 { 
        width: 3.688rem;
        height: 0.2rem;
        background-color: #4884F9;
        text-align: center;
    }

    .services1 {
        font-weight: bold;
        font-size: 1.313rem;
        color: #FFF;
        padding-top: 1.25rem;
        text-align: center;
    }

    .services22 {
        font-weight: bold;
        font-size: 2.125rem;
        color: #4884F9;
        padding-top: 1.25rem;
        text-align: center;
    }

    .textpr {
        text-align: center;
        grid-column: 4/10;
        padding-top: 1.875rem;
        padding-bottom: 5.625rem;
        color: #FFF;
        font-size: 1rem;
    }
`;

export const Areabarberphotos = styled.div`
    grid-column: 2/12;

    

    .Areabarberp {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;


        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    .Areanameb1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 1rem;
        margin-left: 1rem;
    }   

    .b1 {
        max-height: 20.5rem;
        max-width: 24rem;
        height: 100%;
        width: 100%;
    }

    .bname1 {
        font-size: 1.625rem;
        color: #4884F9;
        padding-top: 0.875rem;
    }
`;