import styled from 'styled-components';
import { FlexWrapper } from '../../FlexWrapper';
import { Field } from '../Field';
import { rulesCardBottom, rulesCardUpper } from '../game-constants';
import { BoldText } from '../../styledTexts';

const Wrapper = styled(FlexWrapper)`
  height: 100%;
  width: 100%;
  justify-content: center;
  grid-row: 2/3;
`;

const FieldStyled = styled(Field)`
  --fieldWidth: 290px;
  --fieldHeight: 182px;
  width: var(--fieldWidth);
  height: var(----fieldHeight);
  min-height: unset;
  --cardSize: 65px;
  
  @media screen and (max-height: 800px) {
    width: calc(var(--fieldWidth) * 800 / 900);
    height: calc(var(--fieldHeight) * 750 / 900);
    --cardSize: 58px;
  }

  @media screen and (max-height: 700px) {
    height: calc(var(--fieldHeight) * 700 / 900);
  }
  
  @media screen and (max-height: 600px) {
    width: calc(var(--fieldWidth) * 500 / 900);
    height: calc(var(--fieldHeight) * 500 / 900);
    --cardSize: 35px;
  }

  @media screen and (max-width: 310px) {
    width: 250px;
  }
  
  & div > div:last-child {
    bottom: auto;
    
    @media screen and (min-height: 801px) {
      bottom: ${({$isTop}) => $isTop ? '5px' : 'auto'};
    }
    
    @media screen and (max-height: 800px) {
      bottom: ${({$isTop}) => $isTop ? '20px' : 'auto'};
    }

    @media screen and (max-height: 700px) {
      bottom: ${({$isTop}) => $isTop ? '30px' : 'auto'};
    }
    
    @media screen and (max-height: 600px) {
      top: ${({$isTop}) => $isTop ? 'calc(100% - 25px)' : '5px'};
    }
  }

  & > div:first-child {
    grid-template-rows: 100%;
    align-items: center;

    @media screen and (max-height: 800px) {
      ${({isBottom}) => isBottom ? 'min-height: calc(var(--fieldHeight) * 750 / 900 - var(--cardSize) * 48 / 80)': ''};
    }

    @media screen and (max-height: 700px) {
      ${({isBottom}) => isBottom ? 'min-height: calc(var(--fieldHeight) * 700 / 900 - var(--cardSize) * 48 / 80)': ''};
    }
    
    @media screen and (max-height: 600px) {
      ${({isBottom}) => isBottom ? 'min-height: calc(var(--fieldHeight) * 600 / 900 - var(--cardSize) * 48 / 80)': ''};
    }
  }
`;

const EqualSign = styled(BoldText)`
  font-size: 40px;
  margin: 5px auto 0;
  line-height: 28px;
`;

export const Stage2Content = () =>  (
    <Wrapper>
        <FieldStyled cards={rulesCardUpper} color={'#45B3E9'} points={6} isNotDrop $isTop/>
        <EqualSign>=</EqualSign>
        <FieldStyled cards={rulesCardBottom} color={'#E94969'} points={6} isNotDrop isBottom />
    </Wrapper>
);


