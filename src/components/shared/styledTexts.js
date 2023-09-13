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
  font-size: calc(var(--cardSize) * 20 / 80);

  @media screen and (max-height: 600px) {
    font-size: 12px;
  }
`;
