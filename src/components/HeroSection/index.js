import React from 'react'
import Video from '../../Video/Background.mp4';

import { 
    HeroBox, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP
 } from './HeroElements';

export const HeroSection = () => {
    

    return (
        <HeroBox >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} tpye='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Doug Jarvis Butchers</HeroH1>
                <HeroP>
                    With two fantastic locations you can find anything you desire all in one place.
                </HeroP>
            </HeroContent>
        </HeroBox>
    )
}

export default HeroSection; 