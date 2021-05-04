import React from 'react';
import { Container, Img, Text1, Text2 } from './Servicesphotos.styled';

function Servicesphotos(props) {
    return (
        <Container>
            <Img>{props.img}</Img>
            <Text1>{props.text11}</Text1>
            <Text2>{props.text22}</Text2>
        </Container>
    )
}

export default Servicesphotos
