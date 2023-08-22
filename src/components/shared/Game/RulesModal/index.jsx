import { useMemo } from 'react';
import styled from 'styled-components';
import { BoldText } from '../../styledTexts';
import { ModalWrapper } from '../../ModalWrapper';
import { Stage } from './Stage';

const Wrapper = styled(ModalWrapper)`
  padding: min(44px, 11.7vw) 20px;
  
  @media screen and (max-height: 700px){
    padding-top: min(20px, 5vw);
  }
`;

export const Title = styled(BoldText)`
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  
  @media screen and (max-height: 700px) {
    font-size: 23px;
  }
`;

export const RulesModal = ({ rulesStage, onNext, onPrev, top }) => {
    const props = useMemo(() => ({
        0: {
            text: 'Перед тобой несколько дел:\nрабочие, личные и учебные. \n' +
                '\n' +
                'Каждое дело прибавляет тебе энергию или отнимает её. ' +
                'Чтобы увидеть описание дела, можешь кликнуть на его иконку.',
        },
        1: {
            text: 'Плашки с делами нужно перетаскивать в блоки. \n' +
                '\n' +
                'Твоя задача — распределить их так, чтобы энергия в блоках уравнялась',
            isLeft: true,
        },
        2: {
            text: 'У тебя будет 5 уровней с растущим количеством дел и сложностью. \n' +
                '\n' +
                'У тебя всё получится!',
            isLeft: true,
            isLast: true,
            style: `
                top: 50%;
                transform: translate(-50%, -50%);
            `,
        },
    }), []);

    return (
        <Wrapper>
            <Title>Как решать уравнения?</Title>
            <Stage {...props[rulesStage]} onPrev={onPrev} onNext={onNext} top={top}/>
        </Wrapper>
    );
};
