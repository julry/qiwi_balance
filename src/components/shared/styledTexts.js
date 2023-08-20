import styled from 'styled-components';

export const RegularText = styled.p`
    font-weight: 400;
`;

const MediumText = styled.p`
    font-weight: 500;
`;

export const BoldText = styled.p`
    font-weight: 700;
`;

export const CommonText = styled(MediumText)`
  font-size: 20px;
  
  @media screen and (max-width: 700px) and (max-height: 750px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 13px;
  }
`;
