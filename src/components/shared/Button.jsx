import styled from 'styled-components';
import { colors } from './colors';

const ButtonStyled = styled.button`
  outline: none;
  --fontSize: calc(var(--cardSize) * 24 / 80);
  background: ${colors.orange};
  border: 1px solid black;
  border-radius: 8px;
  font-size: max(var(--fontSize), 18px);
  font-weight: 700;
  padding: calc(var(--cardSize) * 17 / 80) calc(var(--cardSize) * 23 / 80) calc(var(--cardSize) * 23 / 80);
  height: calc(var(--cardSize) * 60 / 80);
  min-height: 30px;
  color: white;
  min-width: max-content;
  flex-shrink: 0;
`;

const MovedButtonStyled = styled(ButtonStyled)`
  position: absolute;
  --bottom: calc(var(--cardSize) * -22 / 80);
  bottom: max(var(--bottom), -15px);
  left: 50%;
  transform: translateX(-50%);
`;

export const Button = (props) => <ButtonStyled {...props} />;
export const MovedButton = (props) => <MovedButtonStyled {...props} />;
