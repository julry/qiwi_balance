import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  z-index: 99;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
`;

export const ModalWrapper = (props) => <Wrapper {...props}/>