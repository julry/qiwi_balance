import styled from 'styled-components';
import { FlexWrapper } from './FlexWrapper';

const Wrapper = styled(FlexWrapper)`
  position: absolute;
  z-index: 99;
  inset: 0;
  background: #FFFFFF;
`;

export const ModalWrapper = (props) => <Wrapper {...props}/>