import { useDrop } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { Card } from './Card';
import { rulesCardBottom, rulesCardUpper } from './game-constants';

const Wrapper = styled(FlexWrapper)`
  position: relative;
  --gridGap: min(6px, 1.6vw);
  --gridPadding: 4px;
  background: ${({$color}) => $color};
  border: 2px solid ${({$color}) => $color};
  border-radius: calc(var(--cardSize) * 20 / 80);
  width: 100%;
  margin: 0 auto;
  background: #1C1C1C;
  z-index: ${({$isOnTop}) => $isOnTop ? 100 : 1};
`;

const CardsWrapper = styled.div`
  --paddingAmount: calc(var(--cardSize) * 48 / 80);
  position: relative;
  display: grid;
  justify-content: space-between; 
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${({$maxCards}) => $maxCards > 4 ? 'repeat(2, var(--cardSize))' : '100%'};
  grid-gap: var(--gridGap);
  padding: 
          ${({$maxCards, $isBottom}) => $maxCards > 4 && $isBottom ? 'var(--paddingAmount)' : 'var(--gridPadding)'} 
          var(--gridPadding) 
          ${({$maxCards, $isBottom}) => $maxCards > 4 && !$isBottom ? 'var(--paddingAmount)' : '0'} 
          var(--gridPadding);
  flex-shrink: 0;
  width: 100%;
  min-height: calc(2 * var(--cardSize) + var(--gridGap) + 2 * var(--gridPadding) + var(--paddingAmount));
  
  @media screen and (max-height: 800px) and (min-width: 330px){
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const Amount = styled.div`
  position: absolute;
  font-family: 'QiwiPixel', sans-serif;
  ${({$isBottom}) => $isBottom ? 'top: 5px' : 'bottom: 5px'};
  left: 50%;
  transform: translateX(-50%);
  font-size: calc(var(--cardSize) * 36 / 80);
  line-height: 100%;
  vertical-align: middle;
`;

export const Field = ({ cards, maxCards, onCardDrop, color, isNotDrop, points, isOnTop, fieldRef, isBottom, isRules }) => {
    const [{}, drop] = useDrop(() => ({
        accept: 'CARD',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item) => {
            onCardDrop?.(item?.id);
        },
    }), []);

    const rulesCards = isBottom ? rulesCardBottom : rulesCardUpper;
    return (
        <Wrapper
            ref={isNotDrop ? fieldRef : mergeRefs([drop, fieldRef])}
            $color={color}
            $isOnTop={isOnTop}
        >
            <CardsWrapper $maxCards={maxCards} $isBottom={isBottom}>
                {isRules ? (
                    <>
                        {rulesCards.map(card => (
                            <Card key={card.id} card={card} color={color} isNotDraggable/>
                        ))}
                        <Amount $color={color} $isBottom={isBottom}>5</Amount>
                    </>
                ) : (
                    <>
                        {cards.map(card => (
                            <Card key={card.id} card={card} color={color} isNotDraggable={isNotDrop}/>
                        ))}
                        <Amount $color={color} $isBottom={isBottom}>{points}</Amount>
                    </>
                )}
            </CardsWrapper>
        </Wrapper>
    );
};
