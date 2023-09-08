import { useDrop } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { Card } from './Card';
import { rulesCardBottom, rulesCardUpper } from './game-constants';

const Wrapper = styled(FlexWrapper)`
  position: relative;
  --gridColumnGap: calc((100% - 4 * var(--cardSize)) / 5);
  --gridGap: min(6px, 1.6vw);
  --gridPadding: 4px;
  background: ${({$color}) => $color};
  border: 1px solid #000000;
  border-radius: calc(var(--cardSize) * 20 / 80);
  width: 100%;
  margin: 0 auto;
  z-index: ${({$isOnTop}) => $isOnTop ? 100 : 1};
`;

const CardsWrapper = styled.div`
  --paddingAmount: calc(var(--cardSize) * 48 / 80);
  position: relative;
  display: grid;
  justify-content: space-between; 
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, var(--cardSize));
  grid-column-gap: var(--gridColumnGap);
  grid-row-gap: var(--gridGap);
  padding: 
          ${({$isBottom}) => $isBottom ? 'var(--paddingAmount)' : 'var(--gridPadding)'} 
          var(--gridColumnGap) 
          ${({$isBottom}) => !$isBottom ? 'var(--paddingAmount)' : '0'} 
          var(--gridColumnGap);
  flex-shrink: 0;
  width: 100%;
  min-height: calc(2 * var(--cardSize) + var(--gridGap) + 2 * var(--gridPadding) + var(--paddingAmount));
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
  color: #FFFFFF;
`;

export const Field = ({ cards, className, onCardDrop, color, isNotDrop, points, isOnTop, fieldRef, isBottom, isRules }) => {
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
            className={className}
            ref={isNotDrop ? fieldRef : mergeRefs([drop, fieldRef])}
            $color={color}
            $isOnTop={isOnTop}
        >
            <CardsWrapper $isBottom={isBottom}>
                {isRules ? (
                    <>
                        {rulesCards.map(card => (
                            <Card key={card.id} card={card} color={color} isNotDraggable/>
                        ))}
                        <Amount $isBottom={isBottom}>5</Amount>
                    </>
                ) : (
                    <>
                        {cards.map(card => (
                            <Card key={card.id} card={card} color={color} isNotDraggable={isNotDrop}/>
                        ))}
                        <Amount $isBottom={isBottom}>{points}</Amount>
                    </>
                )}
            </CardsWrapper>
        </Wrapper>
    );
};
