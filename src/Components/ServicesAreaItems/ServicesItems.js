import React from 'react';

import { Container, Img, Text1, Line, Text2 } from './SerivicesItems.styled';

function ServicesItems(props) {
    return (
        <Container>
            <Img>{props.img}</Img>
            <Text1>{props.text1}</Text1>
            <Line>{props.line}</Line>
            <Text2>{props.text2}</Text2>
        </Container>
    )
}

export default ServicesItems;
