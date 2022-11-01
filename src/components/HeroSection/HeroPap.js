import React from 'react'

import { 
    HeroBox, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP
 } from './HeroElements';

export const HeroPap = () => {
    
    return (
        <HeroBox >
            <HeroBg>
                <VideoBg></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Papamoa Plaza</HeroH1>
                <HeroP>
                    Contact us at:
                </HeroP>
                
            </HeroContent>
        </HeroBox>
    )
}

export default HeroPap; 