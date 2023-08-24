import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { useRef } from 'react';
import { usePreview } from 'react-dnd-multi-backend';
import {mergeRefs} from 'react-merge-refs';
import { colors } from '../colors';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: var(--cardSize);
  height: var(--cardSize);
  background-color: ${({$bgColor}) => $bgColor ?? colors.orange};
  border-radius: var(--cardBorder);
  cursor: ${({$isDraggable}) => $isDraggable ? 'grab' : 'auto'};
`;

const StyledPreview = styled(Wrapper)`
  opacity: 0.3;
  cursor: grabbing;
  z-index: 1000;
`;

const PointWrapper = styled.div`
  position: absolute;
  padding: 3px 6px 0;
  --fontSize: calc(var(--cardSize) * 16 / 80);
  --bottom: calc(var(--cardSize) * -6 / 80); 
  font-size: max(14px, var(--fontSize));
  font-weight: bold;
  min-width: calc(var(--cardSize) * 32 / 80);
  width: max-content;
  text-align: center;
  bottom: max(var(--bottom), -8px);
  border-radius: var(--smallRadius);
  background: ${colors.purple};
  left: 50%;
  transform: translateX(-50%);
`;

const Icon = styled.img`
  margin: ${({$isShowPoints}) => $isShowPoints ? 'calc(var(--cardSize) * 7 / 80) auto auto' : 'auto'};
  width: calc(var(--cardSize) * 50 / 80);
  height: calc(var(--cardSize) * 50 / 80);
  user-select: none;
  user-drag: none;
  pointer-events: none;
`;

export const Card = ({ className, card, onDragStart, color, isShowPoints, onClick, isNotDraggable = false }) => {
    const dragRef = useRef();
    const { id, shownPoints } = card;

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'CARD',
        item: () => {
            onDragStart?.(id);
            return {id};
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id]);

    const CardPreview = (props) => {
        const {display, style} = usePreview();

        if (!display || !style) {
            return null;
        }

        return (
            <StyledPreview style={style} {...props}>
             <Icon src={card.icon}/>
            </StyledPreview>
        );
    };

    if (isDragging) {
        return <CardPreview />;
    }

    return (
        <Wrapper
            className={className}
            $bgColor={color}
            $isDraggable={!isNotDraggable}
            onClick={onClick}
            ref={isNotDraggable ? null : mergeRefs([drag, dragRef])}
        >
            <Icon src={card.icon} $isShowPoints={isShowPoints}/>
            {isShowPoints && (
                <PointWrapper>{shownPoints}</PointWrapper>
            )}
        </Wrapper>
    )
}