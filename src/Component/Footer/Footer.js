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
/* .footer-middle {
    background: var(--mainColor);
    padding-top: 2rem;
    color: var(--mainWhite);
    
} */
.text-xs-center {
    background: var(--mainColor);
    padding-top: 3rem;
    color: var(--mainWhite);
    text-align: center;
}

.footer-bottom {
    padding-top: .05rem;
    padding-bottom: .05rem;
}
`;