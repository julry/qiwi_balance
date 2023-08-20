import styled from 'styled-components';
import { useState } from 'react';
import { useIMask } from 'react-imask';
import { CommonText } from './styledTexts';
import { Modal } from './Modal';
import { colors } from './colors';
import tgIcon from '../../assets/images/winkFace.svg';

const ModalWrapper = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  margin-top: min(35px, 9.3vw);
  max-width: min(88.7vw, 350px);
`;

const InputWrapper = styled.div`
  position: relative;
  margin-top: min(20px, 5.1vw);
`;

const Input = styled.input`
  border-radius: 5px;
  touch-action: none;
  border: none;
  padding: 30px 10px 10px;
  font-size: 18px;
  background: white;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #C9C9C9;
  }
  
  @media screen and (min-height: 750px) {
    font-size: 23px;
  }
`;

const InputLabel = styled.p`
  position: absolute;
  top: 8px;
  lefT: 10px;
  font-size: 11px;
  color: #797E8B;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border: 1px solid white;
  border-radius: 3px;
  margin-right: min(10px, 2.6vw);

  @media screen and (min-height: 750px) {
    width: 20px;
    height: 20px;
    margin-right: min(20px, 5.1vw);
  }
`;

const InputRadioButton = styled.input`
  display: none;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 9px;
  width: 100%;
  margin: min(20px, 4.5vw) auto;
  text-align: left;
  
  & ${InputRadioButton}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    background-color: ${colors.orange};
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 1px;

    @media screen and (min-height: 750px) {
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Link = styled.a`
  color: inherit;
`;

export const LastModal = ({onNext}) => {
    const [phone, setPhone] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [opts] = useState({mask: '+{7} 000 000-00-00'});
    const {ref, setValue, value} = useIMask(opts, {
        onAccept: (value) => setPhone(value),
    });

    const sendData = () => {
        setIsSending(true);

        const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdaVr-4R_moI4F13aqbKAeAEVu7Sp0_Orh0ai414es9l3R8xA/formResponse';
        const PHONE_ID = 'entry.1077786449';
        const formData = new FormData();

        formData.append(PHONE_ID, phone);

        const myInit = {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        };

        const myRequest = new Request(GOOGLE_FORM_ACTION_URL, myInit);

        fetch(myRequest).then(() => {
            onNext();
        }).finally(() => {
            setIsSending(false);
        });
    };

    return (
        <ModalWrapper
            text={
                'Твои навыки тайм-менеджмента восхищают! ' +
                'Работа в QIWI тебе точно будет по вкусу. Будь в курсе ' +
                'новостей и свежих анонсов — переходи в канал QIWI INSIDE!' +
                '\nВсе актуальные вакансии есть \nна нашем карьерном портале,' +
                '\nищи его в закрепе. Построй карьеру \nв динамичном финтехе!'
            }
            btnText={'Заглянуть к QIWI'}
            icon={tgIcon}
            onClick={onNext}
        >
            <Form>
                <CommonText>
                    Частичка крутого IT-сообщества всегда может быть с тобой — участвуй в розыгрыше приза!
                </CommonText>
                <InputWrapper>
                    <InputLabel>Номер телефона</InputLabel>
                    <Input
                        ref={ref}
                        type="tel"
                        placeholder="+7 XXX XXX-XX-XX"
                        name="XmnwAc"
                        value={phone}
                        onChange={e => setValue(e.target.value)}
                    />
                </InputWrapper>
                <RadioButtonLabel>
                    <InputRadioButton
                        type="checkbox"
                        value={isAgreed}
                        checked={isAgreed}
                        onChange={() => setIsAgreed(prevAgreed => !prevAgreed)}
                    />
                    <RadioIconStyled/>
                    <span>
                        Я согласен(а) на <Link href={'https://fut.ru/personal_data_policy/'} target="_blank">
                        обработку персональных данных</Link> и получение {'\n'}информационных сообщений
                    </span>
                </RadioButtonLabel>
            </Form>
        </ModalWrapper>
    );
};
