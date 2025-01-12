import React from "react";

import * as S from './styles'
import AnimatedLottieView from 'lottie-react-native';
import rowletAnimation from './rowletAnimation.json'
import { Button } from "../../components/Button";

export function Welcome() {
  return (
  <S.Container>
    <S.Content>
      <AnimatedLottieView autoPlay source={rowletAnimation} loop style={{width: "100%", height: "100%"}} />
    </S.Content>
    <S.Footer>
      <Button title="comesar"/>
    </S.Footer>
  </S.Container>
)}