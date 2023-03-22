import React, {useContext} from 'react'
import { HeroDiv, H4 } from './Hero.styled';

export default function Hero({hero}) {
  return (
    <HeroDiv>
        <H4>{hero}</H4>
    </HeroDiv>
  )
}

