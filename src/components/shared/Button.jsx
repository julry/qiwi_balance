import styled from 'styled-components';
import { colors } from './colors';

const TYPE_TO_COLOR = {
    primary: colors.orange,
    secondary: colors.orange
};

const ButtonStyled = styled.button`
  outline: none;
  background: ${({$type}) => TYPE_TO_COLOR[$type]};
  border: 2px solid white;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  padding: 10px 10px 10px;
  height: 44px;
  color: white;
  min-width: max-content;
  
  @media screen and (max-height: 750px) {
    font-size: 18px;
    height: 30px;
    padding: 5px;
  }
`;

const MovedButtonStyled = styled(ButtonStyled)`
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-height: 750px) {
    bottom: -15px;
  }
`;

export const Button = ({type = 'primary', ...restProps}) => <ButtonStyled $type={type} {...restProps} />;
export const MovedButton = ({type = 'primary', ...restProps}) => <MovedButtonStyled $type={type} {...restProps} />;
