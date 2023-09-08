import styled from 'styled-components';
import face from '../../../assets/images/heartFace.svg';
import { Button } from '../Button';
import { CommonText } from '../styledTexts';
import { colors } from '../colors';

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: ${colors.orange};
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
  
  @media screen and (max-height: 800px) and (min-width: 330px) {
    white-space: normal;
    
    & p {
      font-size: 16px !important;
    }
  }
`;

const Icon = styled.div`
  background: url(${face}) no-repeat 0 0 /cover;
  width: var(--cardSize);
  height: var(--cardSize);
  margin-right: 33px;

  @media screen and (max-height: 800px) and (min-width: 330px) {
    margin-right: 20px;
  }
`;

export const DoneModal = ({onNext}) => (
    <Wrapper>
        <Info>
            <Icon />
            <CommonText>
                {'Молодец — \nвсё верно!'}
            </CommonText>
        </Info>
        <Button onClick={onNext}>Идти дальше</Button>
    </Wrapper>
)
