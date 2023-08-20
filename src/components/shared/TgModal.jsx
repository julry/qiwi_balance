import tgIcon from '../../assets/images/winkFace.svg';
import styled from 'styled-components';
import { Modal } from './Modal';
import { CommonText } from './styledTexts';

const ModalWrapper = styled(Modal)`
  padding-top: min(125px, 32vw);
`;

const Link = styled(CommonText)`
  padding-bottom: 1px;
  border-bottom: 1px solid white;
  margin: min(52px, 10vw) auto 0;
  width: max-content;
  cursor: pointer;
`;

export const TgModal = ({onNext}) => (
    <ModalWrapper
        text={
            'Ты круто справляешься, айтишники всех ' +
            'отделов QIWI уже хотят тебя к себе в команду! \n' +
            '\n' +
            'Загляни в tg-канал QIWI INSIDE, чтобы разузнать все секреты \n' +
            'об ИТ-карьере и ощутить себя сотрудником компании.\n' +
            '\n' +
            'Или сделай это позже , а сейчас иди до победного — реши все уравнения!'
        }
        btnText={'Продолжить игру'}
        icon={tgIcon}
        onClick={onNext}
    >
        <Link>Заглянуть к QIWI</Link>
    </ModalWrapper>
)