import React from 'react';
import {Container, Icon, Name} from "./style";
import LinkedIn from '../../assets/linkedIn.webp';

function Footer() {

    function goToLinkedIn() {
        window.open('https://www.linkedin.com/in/francisco-angelim-84a1a3104/', '_blank');
    }

    return (
        <Container onClick={goToLinkedIn}>
            <Icon src={LinkedIn}/>
            <Name>Francisco Angelim</Name>
        </Container>
    );
}

export default Footer;
