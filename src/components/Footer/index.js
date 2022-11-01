import React from 'react';
import {
  FaFacebook
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import { animateScroll as scroll} from 'react-scroll';

const toggleHome = () => {
  scroll.scrollToTop();
}

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubText>Albert Jovner 30030738</FooterSubText>
        
      </FooterSubscription>
      
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/' onClick={toggleHome}>
             DJB
          </SocialLogo>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
