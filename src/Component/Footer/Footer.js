import React from 'react'
import styled from "styled-components";


 function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Nigist Store | All Rights Reserved

                </p>



            </div>
        </FooterContainer>
    );
};
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainColor);
    padding-top: 1rem;
    color: var(--mainWhite);
    text-align: center;
    padding-bottom: 1rem;
    
}
.main-footer {
    position: absolute;
}
`;