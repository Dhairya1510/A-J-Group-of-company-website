import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinkWrapper,
FooterLinkItems,FooterLinkTitle,FooterLink,
SocialMedia, SocialMediaWrap, SocialIconLink, SocialLogo, SocialIcons, WebsiteRights} from './FooterElements'

const Footer = () => {

  const toggleHome = () => {
   scroll.scrollToTop();
 }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
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
            <WebsiteRights> AJGOC © {new Date().getFullYear()}
            All right reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
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
