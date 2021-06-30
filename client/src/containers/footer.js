import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                
                    <Footer.Link href="#"><Icon className="fas fa-map-marker-alt" />Faculty of Engineering , Cairo University Giza - Egypt.</Footer.Link>
                    <Footer.Link href="#"><Icon className="fas fa-phone-alt" />Phone number</Footer.Link>
                    <Footer.Link href="#"><Icon className="far fa-envelope" />beat.sbme.official@gmail.com</Footer.Link>
                   
                </Footer.Column>
                
                
                <Footer.Column>
                <Footer.Title>About Beat</Footer.Title>
                <Footer.Link href="#">Biomedical Engineering Awareness and Technologies (BEAT)</Footer.Link>
                <div className="icons">
                    <Footer.Link href="#"><Icon className="fab fa-facebook-square" /></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-linkedin" /></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube-square" /></Footer.Link>
                    </div>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
}