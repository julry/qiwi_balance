import styled from 'styled-components';
import { Field } from '../Field';
import { CardsPlace } from '../CardsPlace';
import { rulesCards } from '../game-constants';
import { Card } from '../Card';

const Wrapper = styled.div`
  position: relative;
  --gridGap: min(10px, 2.6vw);
`;

const FieldStyled = styled(Field)`
  width: 258px;
  height: 107px;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
  
  & div > div {
    bottom: auto;
    font-size: 26px;
    top: ${({$isTop}) => $isTop ? '62px' : '5px'};
  }

  @media screen and (max-width: 310px) {
    width: 230px;
  }
  
  &:first-child {
    margin-bottom: 160px;

    @media screen and (max-height: 800px){
      margin-bottom: 140px;
    }

    @media screen and (max-height: 700px){
      margin-bottom: 115px;
    }

    @media screen and (max-height: 600px){
      margin-bottom: 90px;
    }

    @media screen and (min-height: 1000px){
      margin-bottom: 180px;
    }
  }
`;

const CardsPlaceStyled = styled(CardsPlace)`
  position: absolute !important;
  top: 82px;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  border: 1px solid #000000;
  padding: 7px;
  background: rgba(255, 255, 255, 0.8);
  height: 204px;
  align-content: center;

  @media screen and (max-height: 800px){
    height: 185px;
  }

  @media screen and (max-height: 700px){
    height: 160px;
  }

  @media screen and (max-height: 600px){
    height: 135px;
  }

  @media screen and (min-height: 1000px){
    height: 225px;
  }
`;

export const Stage1Content = () => (
    <Wrapper>
        <FieldStyled cards={[]} color={'#45B3E9'} points={0} isNotDrop $isTop/>
        <CardsPlaceStyled maxCards={rulesCards.length} isOnTop>
            {rulesCards.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    isNotDraggable
                    isShowPoints
                />
            ))}
        </CardsPlaceStyled>
        <FieldStyled cards={[]} color={'#E94969'} points={0} isNotDrop isBottom />
    </Wrapper>
);