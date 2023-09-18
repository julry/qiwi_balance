import styled from 'styled-components';
import { BoldText, CommonText } from '../../styledTexts';
import { ModalWrapper } from '../../ModalWrapper';
import { Stage1Content } from './Stage1Content';
import { Button } from '../../Button';
import { Stage2Content } from './Stage2Content';
import { Stage3Content } from './Stage3Content';

const Wrapper = styled(ModalWrapper)`
  display: grid;
  grid-template-rows: auto min(50vh, 101vw) auto calc(60 * calc(var(--cardSize) * 5) / 80);
  padding: min(44px, 11.7vw) 20px;
  color: #000000;
  
  @media screen and (max-height: 700px){
    padding-top: min(20px, 5vw);
  }
  
  @media screen and (max-height: 600px) {
    grid-template-rows: auto minmax(calc(390 * var(--cardSize) / 80), 50%) auto calc(60 * calc(var(--cardSize) * 3) / 80);
  }
`;

export const Title = styled(BoldText)`
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: min(10px, 2.7vw);
  
  @media screen and (max-height: 700px) {
    font-size: 23px;
  }

  @media screen and (max-height: 600px) {
    font-size: 20px;
  }
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: min(20px, 5.1vw);

  @media screen and (max-height: 600px) {
    padding-top: min(5px, 1.5vw);
  }
`;

const ButtonRight = styled(Button)`
  padding-top:  ${({$isLast}) => $isLast ? 'calc(var(--cardSize) * 17 / 80)' : 'calc(var(--cardSize) * 19 / 80)'};
  width: ${({$isLast}) => $isLast ? 'calc(var(--cardSize) * 133 / 80)' : 'calc(var(--cardSize) * 48 / 80)'};

  @media screen and (max-height: 600px) {
    padding-top: calc(var(--cardSize) * 15 / 80);
  }
`;

const ButtonLeft = styled(Button)`
  padding-top: calc(var(--cardSize) * 19 / 80);
  width: calc(var(--cardSize) * 48 / 80);
  opacity: ${({$isInvisible}) => $isInvisible ? 0 : 1};

  @media screen and (max-height: 600px) {
    padding-top: calc(var(--cardSize) * 15 / 80);
  }
`;

const TextWrapper = styled.div`
  margin-left: calc(var(--cardSize) * 50 / 80 - 20px);
  padding: min(20px, 5.1vw);
  min-height: calc(var(--cardSize) * 178 / 80);
  max-width: calc(var(--cardSize) * 340 / 80);
`;

export const RulesModal = ({ rulesStage, onNext, onPrev, top }) => {
    let Component;
    let text = '';
    let title = '';

    switch (rulesStage) {
        case 0:
            Component = Stage1Content;
            title = 'Как решать уравнения?\n Шаг 1';
            text = 'Перед тобой несколько дел:\nрабочие, личные и учебные. \n' +
                '\n' +
                'Каждое дело прибавляет тебе энергию или отнимает её. ' +
                'Чтобы увидеть описание дела, можешь кликнуть на его иконку.';
            break;
        case 1:
            Component = Stage2Content;
            title = 'Как решать уравнения?\n Шаг 2';
            text = 'Плашки с делами нужно\nперетаскивать в блоки. \n' +
                '\n' +
                'Твоя задача — распределить\n их так, чтобы энергия в блоках уравнялась';
            break;
        case 2:
            Component = Stage3Content;
            title = 'ПОРА ЗА ДЕЛО!';
            text = 'У тебя будет 5 уровней \nс растущим количеством дел \nи разной сложности. \n' +
                '\n' +
                'У тебя всё получится!'
            break;
        default:
            break;
    }

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Component />
            <TextWrapper>
                <CommonText>{text}</CommonText>
            </TextWrapper>
            <ButtonsBlock>
                <ButtonLeft onClick={onPrev} $isInvisible={rulesStage === 0}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.799998 9.06L9.08 17.34V12.66L7.16 10.74H21.2V7.38H7.16L9.08 5.46V0.779999L0.799998 9.06Z" fill="white"/>
                    </svg>
                </ButtonLeft>
                <ButtonRight onClick={onNext} $isLast={rulesStage === 2}>
                    {rulesStage === 2 ? 'Решать!' : (
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.2 9.06L12.92 17.34V12.66L14.84 10.74H0.8V7.38H14.84L12.92 5.46V0.779999L21.2 9.06Z" fill="white"/>
                        </svg>
                    )}
                </ButtonRight>
            </ButtonsBlock>
        </Wrapper>
    );
};
