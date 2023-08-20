import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';

const Wrapper = styled.div`
  --gridGap: min(20px, 5.1vw);
  --gridPadding: ${({$isOnTop}) => $isOnTop ? '4px' : 0};
  position: relative;
  width: ${({$isOnTop}) => $isOnTop ? 'calc(100% + 8px)' : '100%'};
  display: grid;
  grid-template-columns: repeat(4, var(--cardSize));
  grid-template-rows: ${({$maxCards}) => $maxCards > 4 ? 'repeat(2, var(--cardSize))' : '100%'};
  row-gap: var(--gridGap);
  column-gap: min(10px, 2.5vw);
  margin: min(23px, 6vw) auto;
  align-items: center;
  min-height: calc(2 * var(--cardSize) + var(--gridGap) + 2 * var(--gridPadding));

  ${({$isOnTop}) => $isOnTop ? 'transform: translateX(-4px)' : ''};
  z-index: ${({$isOnTop}) => $isOnTop ? 100 : 3};
  background: #1C1C1C;
  border-radius: var(--borderRadius);
  padding: var(--gridPadding);
  
  @media screen and (max-height: 750px) {
    row-gap: min(10px, 2.6vw);
  }
`;

export const CardsPlace = ({ className, onCardDrop, isNotDrop, children, placeRef, isOnTop, maxCards }) => {
    const [{}, drop] = useDrop(() => ({
        accept: 'CARD',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item) => {
            onCardDrop?.(item?.id);
        },
    }), []);

    return (
        <Wrapper
            className={className}
            ref={isNotDrop ? placeRef : mergeRefs([placeRef, drop])}
            $isOnTop={isOnTop}
            $maxCards={maxCards}
        >
            {children}
        </Wrapper>
    )
}