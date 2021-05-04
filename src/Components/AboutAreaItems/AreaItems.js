import React from 'react';

import { Container, Image, Comment, Name } from './AreaItems.styled';

import aspas from '../../Images/aspas.png';

function AreaItems(props) {
    return (
        <Container>
            <Image  src={aspas} />
            <Comment>{props.comment}</Comment>
            <Name>{props.name}</Name>
        </Container>
    )
}

export default AreaItems
