import React from 'react'
import Image from '../../Video/OwensPlace.mp4'
import { 
    HeroBox, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP
 } from './HeroElements';

export const HeroOwen = () => {
    

    return (
        <HeroBox >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Image} tpye='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Owens Place</HeroH1>
                <HeroP>
                    Contact us at: 
                </HeroP>
                
            </HeroContent>
        </HeroBox>
    )
}

export default HeroOwen; 