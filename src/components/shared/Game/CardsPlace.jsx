import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { mergeRefs } from 'react-merge-refs';

const Wrapper = styled.div`
  position: relative;
  width: ${({$isOnTop}) => $isOnTop ? 'calc(100% + 8px)' : '100%'};
  display: grid;
  grid-template-columns: repeat(4, var(--cardSize));
  grid-template-rows: repeat(2, var(--cardSize));
  row-gap: min(20px, 5.1vw);
  column-gap: min(10px, 2.5vw);
  margin: min(23px, 6vw) auto;
  ${({$isOnTop}) => $isOnTop ? 'transform: translateX(-4px)' : ''};
  z-index: ${({$isOnTop}) => $isOnTop ? 100 : 3};
  background: #1C1C1C;
  border-radius: var(--borderRadius);
  padding: ${({$isOnTop}) => $isOnTop ? '4px' : 0};
  
  @media screen and (max-height: 750px) {
    row-gap: min(10px, 2.6vw);
  }
`;

export const CardsPlace = ({ className, onCardDrop, isNotDrop, children, placeRef, isOnTop }) => {
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
        >
            {children}
        </Wrapper>
    )
}