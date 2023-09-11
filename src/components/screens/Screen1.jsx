import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { colors } from '../shared/colors';
import ball from '../../assets/images/ball.svg';
import star from '../../assets/images/star.svg';
import fire from '../../assets/images/fire.svg';
import heart from '../../assets/images/heart.svg';
import light from '../../assets/images/light.svg';
import sticker from '../../assets/images/sticker.svg';
import { BoldText, CommonText } from '../shared/styledTexts';
import { FlexWrapper } from '../shared/FlexWrapper';
import { MovedButton } from '../shared/Button';

const Wrapper = styled(FlexWrapper)`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${colors.orange};
`;

const Icon = styled.div`
  position: absolute;
  background-size: cover;
`;

const Ball = styled(Icon)`
  background-image: url(${ball});
  top: min(45px, 5.3%);
  left: min(54px, 13.8vw);
  height: min(40px, 10.2vw);
  width: min(40px, 10.2vw)
`;

const Heart = styled(Icon)`
  background-image: url(${heart});
  bottom: min(133px, 15.6%);
  right: min(63px, 7.4vw);
  height: min(40px, 10.2vw);
  width: min(45px, 11.53vw)
`;

const Fire = styled(Icon)`
  background-image: url(${fire});
  bottom: min(83px, 9.8%);
  left: min(45px, 11.53vw);
  height: min(50px, 12.8vw);
  width: min(39px, 10vw)
`;

const Star = styled(Icon)`
  background-image: url(${star});
  top: min(67px, 7.9%);
  right: min(127px, 32.5vw);
  height: min(40px, 10.2vw);
  width: min(43px, 11.02vw)
`;

const Sticker = styled(Icon)`
  background-image: url(${sticker});
  bottom: min(28px, 7.1%);
  right: min(53px, 13.5vw);
  height: min(56px, 14.3vw);
  width: min(200px, 51vw)
`;

const Light = styled(Icon)`
  z-index: 2;
  background-image: url(${light});
  top: max(-20px, -5.1vw);
  right: min(29px, 7.4vw);
  height: min(40px, 10.2vw);
  width: min(29px, 7.4vw);
`;

const TextWrapper = styled.div`
  position: relative;
  width: calc(var(--cardSize) * 380 / 80);
  padding: min(20px, 5.1vw) min(20px, 5.1vw) min(44px, 11.29vw);
  background: white;
  margin: 0 auto;
  border: 2px solid black;
  color: black;
  border-radius: var(--borderRadius);
  z-index: 3;
`;

const Title = styled(BoldText)`
  position: relative;
  z-index: 4;
  font-size: 40px;
  margin: min(140px, 30.2vw) auto min(20px, 5.1vw);
  text-align: center;
  text-transform: uppercase;
  color: white;

  @media screen and (max-height: 700px) {
    font-size: 36px;
  }
  
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`;

const MovedButtonStyled = styled(MovedButton)`
  background: black;
  font-weight: 400;
  font-size: 32px;
  padding: 6px 15px 6px;
  min-height: 44px;
  bottom: -22px;
`;

export const Screen1 = () => {
    const { next } = useProgress();

    return (
        <Wrapper>
            <Title>Влетай в режим{'\n'}баланса!</Title>
            <Star />
            <Ball />
            <Fire />
            <Heart />
            <Sticker />
            <TextWrapper>
                <Light />
                <CommonText>
                    Учёба, работа и личная жизнь{'\n'}
                    заставляют тебя разрываться? {'\n'} Или ты только готовишься начать карьеру и со страхом
                    представляешь этих трёх всадников вместе?
                </CommonText>
                <br/>
                <CommonText>
                    Тогда тебе точно пригодится навык балансирования между тремя важнейшими сферами!
                </CommonText>
                <br/>
                <CommonText>
                    Решай жизненные уравнения вместе {'\n'}с QIWI и повышай уровень своих скиллов ;)
                </CommonText>
                <MovedButtonStyled onClick={next}>В игру</MovedButtonStyled>
            </TextWrapper>
        </Wrapper>
    )
}