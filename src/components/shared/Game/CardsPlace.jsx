import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';

const Wrapper = styled.div`
  --gridGap: min(10px, 2.6vw);
  position: relative;
  width: ${({$isOnTop}) => $isOnTop ? 'calc(4 * var(--cardSize) + 3 * var(--gridGap) + 14px)' : 'calc(4 * var(--cardSize) + 3 * var(--gridGap))'};
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${({$maxCards}) => $maxCards > 4 ? 'repeat(2, var(--cardSize))' : '100%'};
  row-gap: var(--gridGap);
  column-gap: var(--gridGap);
  margin: min(23px, 6vw) auto;
  align-items: center;
  min-height: calc(2 * var(--cardSize) + var(--gridGap));
  z-index: 3;
  border-radius: var(--borderRadius);

  @media screen and (max-height: 800px) and (min-width: 330px){
    --gridGap: min(20px, 5.1vw);
  }

  @media screen and (min-height: 1000px){
    --gridGap: min(25px, 5.1vw);
  }

  @media screen and (max-height: 600px){
    margin: min(10px, 2.5vw) auto;
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