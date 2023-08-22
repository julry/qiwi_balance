import styled from 'styled-components';
import { CommonText } from '../../styledTexts';
import { MovedButton } from '../../Button';
import { colors } from '../../colors';

const Wrapper = styled.div`
  position: absolute;
  background: ${colors.purple};
  border-radius: var(--borderRadius);
  padding: calc(var(--cardSize) * 23 / 80) calc(var(--cardSize) * 23 / 80) calc(var(--cardSize) * 33 / 80);
  border: 2px solid white;
  left: 50%;
  transform: translateX(-50%);
  top: ${({top}) => top}px;
  width: calc(4 * var(--cardSize) + 30px);
  ${({$style}) => $style};
`;

const ButtonRight = styled(MovedButton)`
  transform: none;
  left: auto;
  right: 26px;
  ${({$isLast}) => $isLast ? 'padding-top: calc(var(--cardSize) * 8 / 80);' : 'display: flex;' +
          'align-items: center; justify-content: center;'};
  width: ${({$isLast}) => $isLast ? 'calc(var(--cardSize) * 133 / 80)' : 'calc(var(--cardSize) * 48 / 80)'};
`;

const ButtonLeft = styled(MovedButton)`
  transform: none;
  left: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--cardSize) * 48 / 80);
  height: calc(var(--cardSize) * 43 / 80);
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
