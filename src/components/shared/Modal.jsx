import styled from 'styled-components';
import { colors } from './colors';
import { ModalWrapper } from './ModalWrapper';
import { FlexWrapper } from './FlexWrapper';
import { CommonText } from './styledTexts';
import { MovedButton } from './Button';

const Rectangle = styled(FlexWrapper)`
  --padding: min(20px, 5.1vw);
  position: relative;
  padding: var(--padding) var(--padding) calc(var(--padding) + 22px);
  background: ${colors.purple};
  border-radius: var(--borderRadius);
  max-width: min(88.7vw, 350px);
  margin: 0 auto;
  border: 1px solid white;
`;

const Icon = styled.div`
  margin: 0 auto min(20px, 5.1vw);
  width: calc(var(--cardSize) * 100 / 80);
  height: calc(var(--cardSize) * 100 / 80);
  background: url(${({$icon}) => $icon}) no-repeat 0 0 /cover;
`;

export const Modal = ({icon, text, onNext, btnText, children, ...restProps}) => (
    <ModalWrapper {...restProps}>
        <Rectangle>
            <Icon $icon={icon}/>
            <CommonText>{text}</CommonText>
            <MovedButton onClick={onNext}>{btnText}</MovedButton>
        </Rectangle>
        {children}
    </ModalWrapper>
)