import React from 'react';
import styled from 'styled-components';
const Header = () => {
    return (
            <MainContainer>
            <h1>STORY</h1>
            </MainContainer>
    )
}

export default Header

//Main container
const MainContainer = styled.header`
background: url(../../images/header.jpeg)no-repeat center/cover;
height: 5rem;

h1{
    transform: translate(-50%, -50%);
    color : #fff;
    font-weight: 90;
    position: absolute;
    top: 5%;
    left: 50%
}
`;