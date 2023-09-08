import styled from 'styled-components';
import { FlexWrapper } from '../../FlexWrapper';
import levels from '../../../../assets/images/rulesLevel.png';

const Wrapper = styled(FlexWrapper)`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: calc(var(--cardSize) * 310 / 80);
  height: calc(var(--cardSize) * 280 / 80);
  object-fit: contain;
`;

export const Stage3Content = () => (
    <Wrapper>
        <Image src={levels} alt={''}/>
    </Wrapper>
);

