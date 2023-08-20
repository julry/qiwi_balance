import styled from 'styled-components';
import { CommonText } from '../styledTexts';
import { colors } from '../colors';

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 13px;
  right: 16px;
  
  &::before {
    position: absolute;
    top:0;
    right: 0;
    content: '';
    width: 2px;
    height: 22px;
    transform: rotate(45deg);
    background: white;
    border-radius: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    top:0;
    right: 0;
    width: 2px;
    height: 22px;
    transform: rotate(-45deg);
    background: white;
    border-radius: 5px;
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

const TextStyled = styled(CommonText)`
  max-width: 57%;
`;

const PointsWrapper = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: bold;
  padding: 2px 6px;
  min-width: 32px;
  height: 20px;
  text-align: center;
  border-radius: 12px;
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
        <TextStyled>
            {card.text}
        </TextStyled>
    </Wrapper>
);
