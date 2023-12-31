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
  background-color: ${({$bgColor}) => $bgColor ?? "#000000"};
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
  padding: 2px 6px 0;
  font-size: 16px;
  font-weight: bold;
  min-width: 32px;
  text-align: center;
  bottom: -6px;
  border-radius: 12px;
  background: ${colors.purple};
  left: 50%;
  transform: translateX(-50%);
`;

const Icon = styled.img`
  margin: ${({$isShowPoints}) => $isShowPoints ? 'auto auto calc(var(--cardSize) * 28 / 80)' : 'auto'};
  width: calc(var(--cardSize) * 42 / 80);
  ${({$isShowPoints}) => $isShowPoints ? 'height: calc(var(--cardSize) * 42 / 80);' : ''};
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

        if (!display) {
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