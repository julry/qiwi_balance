import styled from 'styled-components';
import { CommonText } from '../../styledTexts';
import { MovedButton } from '../../Button';

const Wrapper = styled.div`
  position: absolute;
  background: #000;
  border-radius: var(--borderRadius);
  padding: min(23px, 5.8vw);
  border: 2px solid white;
  left: 50%;
  transform: translateX(-50%);
  top: ${({top}) => top}px;
  width: calc(4 * var(--cardSize) + 30px);
  ${({$style}) => $style};
  
  @media screen and (max-height: 700px) {
    padding: min(15px, 4vw) min(15px, 4vw) min(20px, 5.3vw);
  }

  @media screen and (min-width: 700px) {
    width: 550px;
  }
`;

const ButtonRight = styled(MovedButton)`
  transform: none;
  left: auto;
  right: 26px;
  width: ${({$isLast}) => $isLast ? '133px' : 'calc(var(--cardSize) / 1.666)'};
`;

const ButtonLeft = styled(MovedButton)`
  transform: none;
  left: 26px;
  width: calc(var(--cardSize) / 1.666);
  height: calc(var(--cardSize) / 1.864);
`;

export const Stage = ({ text, isLeft, onPrev, onNext, isLast, style, top}) => (
    <Wrapper $style={style} top={top}>
        <CommonText>
            {text}
        </CommonText>
        {isLeft && <ButtonLeft onClick={onPrev}>
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" >
                <path d="M0.0399995 8.56L7.84 16.36V12.28L5.56 10H19.96V7.12H5.56L7.84 4.84V0.759999L0.0399995 8.56Z" fill="white"/>
            </svg>
        </ButtonLeft>}
        <ButtonRight onClick={onNext} $isLast={isLast}>
            {isLast ? 'Вперед' : (
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.96 8.56L12.16 16.36V12.28L14.44 10H0.04V7.12H14.44L12.16 4.84V0.759999L19.96 8.56Z" fill="white"/>
                </svg>
            )}
        </ButtonRight>
    </Wrapper>
)
