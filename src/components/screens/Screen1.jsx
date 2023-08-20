import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { colors } from '../shared/colors';
import ball from '../../assets/images/ball.svg';
import cup from '../../assets/images/cup.svg';
import book from '../../assets/images/book.svg';
import dialogs from '../../assets/images/dialogs.svg';
import question from '../../assets/images/question.svg';
import { BoldText, CommonText } from '../shared/styledTexts';
import { FlexWrapper } from '../shared/FlexWrapper';
import { MovedButton } from '../shared/Button';

const Wrapper = styled(FlexWrapper)`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${colors.purple};
`;

const Icon = styled.div`
  position: absolute;
  background-size: cover;
`;

const Ball = styled(Icon)`
  background-image: url(${ball});
  top: 0;
  left: min(27px, 6.9vw);
  height: min(63px, 16.2vw);
  width: min(94px, 24.1vw)
`;

const Cup = styled(Icon)`
  background-image: url(${cup});
  bottom: min(46px, 11.7vw);
  right: min(22px, 5.666vw);
  height: min(99px, 25.4vw);
  width: min(99px, 25.4vw)
`;

const Book = styled(Icon)`
  background-image: url(${book});
  bottom: 0;
  left: 0;
  height: min(135px, 34.6vw);
  width: min(153px, 39.2vw)
`;

const Dialogs = styled(Icon)`
  background-image: url(${dialogs});
  top: min(25px, 6.9vw);
  right: min(45px, 11.5vw);
  height: min(82px, 21vw);
  width: min(85px, 21.7vw)
`;

const Question = styled(Icon)`
  z-index: 2;
  background-image: url(${question});
  top: max(-55px, -14.1vw);
  right: 0;
  height: min(75px, 19.2vw);
  width: min(75px, 19.2vw)
`;

const TextWrapper = styled.div`
  position: relative;
  padding: min(20px, 5.1vw) min(20px, 5.1vw) min(44px, 11.29vw);
  background: rgba(255, 255, 255, 0.10);
  margin: 0 10px;
  border-radius: var(--borderRadius);
  z-index: 3;
`;

const Title = styled(BoldText)`
  font-size: 40px;
  margin: min(140px, 30.2vw) auto min(20px, 5.1vw);
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-height: 700px) {
    font-size: 36px;
  }
  
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`;

export const Screen1 = () => {
    const { next } = useProgress();

    return (
        <Wrapper>
            <Ball />
            <Cup />
            <Book />
            <Dialogs />
            <Title>Влетай в режим баланса!</Title>
            <TextWrapper>
                <Question />
                <CommonText>
                    Учёба, работа и личная жизнь {'\n'}заставляют тебя разрываться? Или ты только готовишься начать карьеру и со страхом представляешь этих трёх всадников вместе?
                </CommonText>
                <br/>
                <CommonText>
                    Тогда тебе точно пригодится навык балансирования между тремя важнейшими сферами!
                </CommonText>
                <br/>
                <CommonText>
                    Решай жизненные уравнения вместе с QIWI и повышай уровень своих скиллов ;)
                </CommonText>
                <MovedButton onClick={next}>В ИГРУ</MovedButton>
            </TextWrapper>
        </Wrapper>
    )
}