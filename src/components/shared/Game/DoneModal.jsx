import styled from 'styled-components';
import face from '../../../assets/images/heartFace.svg';
import { Button } from '../Button';
import { CommonText } from '../styledTexts';

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: min(24px, 4.8vw);
`;

const Icon = styled.div`
  background: url(${face}) no-repeat 0 0 /cover;
  width: var(--cardSize);
  height: var(--cardSize);
  margin-right: 33px;
`;


export const DoneModal = ({onNext}) => (
    <Wrapper>
        <Info>
            <Icon />
            <CommonText>
                {'Молодец — \nвсё верно!'}
            </CommonText>
        </Info>
        <Button onNext={onNext}>Идти дальше</Button>
    </Wrapper>
)
