import tgIcon from '../../assets/images/winkFace.svg';
import styled from 'styled-components';
import { Modal } from './Modal';

const ModalWrapper = styled(Modal)`
  padding-top: min(125px, 32vw);
`;

export const TgModal = ({onNext, text}) => (
    <ModalWrapper
        text={text}
        btnText={'Продолжить игру'}
        icon={tgIcon}
        onNext={onNext}
    />
)