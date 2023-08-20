import styled from 'styled-components';
import { colors } from './colors';

const Wrapper = styled.div`
  position: relative;
  padding: min(23px, 6.1vw);
  background: ${colors.purple};
  border-radius: var(--borderRadius);
`;

export const PurpleRect = (props) => <Wrapper {...props} />;
