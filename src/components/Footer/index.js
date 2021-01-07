import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinkWrapper,
FooterLinkItems,FooterLinkTitle,FooterLink,
SocialMedia, SocialMediaWrap, SocialIconLink, SocialLogo, SocialIcons, WebsiteRights, FooterLinkS} from './FooterElements'

const Footer = () => {

  const toggleHome = () => {
   scroll.scrollToTop();
 }

  return (
    <FooterContainer id='Contact Us'>
      <FooterWrap>
        <FooterLinksContainer>
        <FooterLinkWrapper>
          <FooterLinkItems> 
            <FooterLinkTitle>USEFUL LINKS</FooterLinkTitle>
              <FooterLink onClick={toggleHome}>Home</FooterLink>
              <FooterLinkS to="about">About us</FooterLinkS>
              <FooterLinkS to="Services">Services</FooterLinkS>
              <FooterLinkS to="Features">Features</FooterLinkS> 
          </FooterLinkItems>
          <FooterLinkItems> 
            <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">testimals</FooterLink>
              <FooterLink to="/signin">Investor</FooterLink>
              <FooterLink to="/signin">Service</FooterLink> 
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems> 
            <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">testimals</FooterLink>
              <FooterLink to="/signin">Investor</FooterLink>
              <FooterLink to="/signin">Service</FooterLink> 
          </FooterLinkItems>
          <FooterLinkItems> 
            <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">testimals</FooterLink>
              <FooterLink to="/signin">Investor</FooterLink>
              <FooterLink to="/signin">Service</FooterLink> 
          </FooterLinkItems>
        </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              AJGOC
            </SocialLogo>
            <WebsiteRights> © Copyright <b>A J Group of Company</b> {new Date().getFullYear()}
            All Right Reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/ajgroupofcompany' target="_blank" aria-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/ajgraphics20/' target="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/ajgroupofcompany/' target="_blank" aria-label="Linkedin">
                <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap> 
    </FooterContainer>
  )
}

export default Footer
