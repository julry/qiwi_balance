import styled from 'styled-components';
import { CommonText } from '../styledTexts';
import { colors } from '../colors';

const Wrapper = styled.div`
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: 0;
  right: 0;
  border-radius: var(--smallRadius);
  background: ${colors.orange};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 13px;
  right: 16px;
  z-index: 4;
  width: 22px;
  height: 22px;
  
  &::before {
    position: absolute;
    top: 0;
    right: 10px;  
    z-index: 4;
    content: '';
    width: 2px;
    height: 22px;
    transform: rotate(45deg);
    background: black;
    border-radius: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    top:0;
    left: 10px;
    width: 2px;
    height: 22px;
    transform: rotate(-45deg);
    background: black;
    border-radius: 5px;
    z-index: 4;
  }
`;


const CardWrapper = styled.div`
  --imageWidth: calc(var(--cardSize) * 70 / 80);
  position: relative;
  margin-right: min(11px, 2.8vw);
  min-width: calc(var(--imageWidth) + 32px);
  height: calc(var(--imageWidth) + 35px);
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;

const Image = styled.div`
  position: absolute;
  left: calc(9px - var(--imageWidth));
  top: 15px;
  width: var(--imageWidth);
  height: var(--imageWidth);
  background: url(${({src}) => src}) no-repeat 100% center;
  background-size: contain;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 57%;
  z-index: 1;
`;

const PointsWrapper = styled.div`
  position: relative;
  --fontSize: calc(var(--cardSize) * 16 / 80);
  --height: calc(var(--cardSize) * 20 / 80);
  font-size: max(14px, var(--fontSize));
  font-weight: bold;
  padding: 2px 6px;
  min-width: 32px;
  color: white;
  height: max(var(--height), 18px);
  text-align: center;
  border-radius: var(--smallRadius);
  background: ${colors.purple};
`;

export const CardInfo = ({card, onClose}) => (
    <Wrapper>
        <CloseIcon onClick={onClose}/>
        <CardWrapper>
            <PointsWrapper>
                {card.shownPoints}
                <Image src={card.icon} />
            </PointsWrapper>
        </CardWrapper>
        <TextWrapper>
            <CommonText>{card.text}</CommonText>
        </TextWrapper>
    </Wrapper>
);
