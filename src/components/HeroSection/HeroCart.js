import React from 'react'
import { 
    HeroBox,
    HeroContent, 
    HeroH1, 
    HeroP
 } from './HeroElements';

export const HeroOwen = () => {
    

    return (
        <HeroBox >
            <HeroContent>
                <HeroH1>The Shopping cart</HeroH1>
                <HeroP>
                    This is where shopping cart items will display with a total at the bottom
                    just above the footer.
                </HeroP>
                
            </HeroContent>
        </HeroBox>
    )
}

export default HeroOwen; 