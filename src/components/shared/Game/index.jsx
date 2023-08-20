import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, TouchTransition, DndProvider } from 'react-dnd-multi-backend';
import refresh from '../../../assets/images/refresh.svg';
import ask from '../../../assets/images/askSign.svg';
import errorIcon from '../../../assets/images/errorFace.svg';
import { FlexWrapper } from '../FlexWrapper';
import { Modal } from '../Modal';
import { Card } from './Card';
import { Field } from './Field';
import { CardsPlace } from './CardsPlace';
import { RulesModal } from './RulesModal';
import { CardInfo } from './CardInfo';
import { DoneModal } from './DoneModal';

const FIELDS = {
    upperField: 'upperField',
    bottomField: 'bottomField',
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: min(44px, 11.7vw) 20px;
  background: #1C1C1C;
 
  @media screen and (max-height: 700px){
    padding-top: min(30px, 8vw);
  }
`;

const Content = styled(FlexWrapper)`
  margin: 0 auto;
  align-items: center;
  width: calc(4 * var(--cardSize) + 30px);
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: min(35px, 9.3vw);

  @media screen and (max-height: 750px){
    margin-bottom: min(15px, 4vw);
  }
`;

const ButtonStyled = styled.button`
  outline: none;
  border: 2px solid white;
  width: 43px;
  height: 43px;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  border-radius: 12px;
  
  @media screen and (max-height: 750px) {
    width: 33px;
    height: 33px;
    border-radius: 10px;
  }

  @media screen and (max-width: 320px) {
    width: 25px;
    height: 25px;
    border-radius: 8px;
  }
`;

const RefreshButton = styled(ButtonStyled)`
  background-image: url(${refresh});
  background-size: 45%;
`;

const RulesButton = styled(ButtonStyled)`
  background-image: url(${ask});
  background-size: 35%;
`;

const LevelInfo = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  padding: 10px;
  height: 43px;
  border-radius: 12px;
  
  @media screen and (max-height: 750px) {
    padding: 5px 10px;
    height: 33px;
    border-radius: 10px;
  }

  @media screen and (max-width: 320px) {
    padding: 1px 10px;
    font-size: 18px;
    height: 25px;
    border-radius: 8px;
  }
`;

const IncorrectModal = styled(Modal)`
  padding-top: min(125px, 32vw);
`;

export const Game = ({ cards, isFirstTime, level, onNext }) => {
    const [isRules, setIsRules] = useState(isFirstTime);
    const [top, setTop] = useState();
    const [rulesStage, setRulesStage] = useState(0);
    const [fieldCards, setFieldCards] = useState({
        [FIELDS.upperField]: [],
        [FIELDS.bottomField]: []
    });
    const [shownCards, setShownCards] = useState(cards);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [points, setPoints] = useState({
        [FIELDS.upperField]: 0,
        [FIELDS.bottomField]: 0
    });
    const [cardInfo, setCardInfo] = useState({shown: false, card: {}});

    const upperFieldRef = useRef();
    const bottomFieldRef = useRef();
    const blockRef = useRef();
    const placeRef = useRef();

    const HTML5toTouch = {
        backends: [
            {
                id: 'html5',
                backend: HTML5Backend,
                transition: MouseTransition,
            },
            {
                id: 'touch',
                backend: TouchBackend,
                preview: true,
                transition: TouchTransition,
            },
        ],
    };

    const manageCards = (chosenCards, card, addField, points = 0) => {
        if (!card) return;

        const upperField = chosenCards[FIELDS.upperField].filter(({ id }) => card.id !== id);
        const bottomField = chosenCards[FIELDS.bottomField].filter(({ id }) => card.id !== id);
        const chosenField = chosenCards[addField];

        if (upperField.length !== chosenCards[FIELDS.upperField].length) {
           setPoints(prevPoints =>({
               ...prevPoints,
               [FIELDS.upperField]: chosenCards[FIELDS.upperField]
                   .reduce((point, card) => point + card.points, 0) - points
           }));
        }

        if (bottomField.length !== chosenCards[FIELDS.bottomField].length) {
            setPoints(prevPoints =>({
                ...prevPoints,
                [FIELDS.bottomField]: chosenCards[FIELDS.bottomField]
                    .reduce((point, card) => point + card.points, 0) - points
            }));
        }

        if (addField) {
            chosenField.push(card);
            setPoints(prevPoints =>({
                ...prevPoints,
                [addField]: chosenField.reduce((point, card) => point + card.points, 0)
            }));
        }

        return {
            upperField,
            bottomField,
            [addField]: chosenField,
        }
    }

    const handleDrop = (field, id) => {
        const card = cards.find(({id: cardId}) => cardId === id);
        setFieldCards(prevFieldCards => manageCards(prevFieldCards, card, field, card?.points));
        setShownCards(prevCards => prevCards.filter(({ id: cardId }) => cardId !== id));
    };

    const handleUpperFieldDrop = (id) => {
       handleDrop('upperField', id);
    };

    const handleBottomFieldDrop = (id) => {
        handleDrop('bottomField', id);
    };

    const handleReturnCard = (id) => {
        const card = cards.find(({id: cardId}) => cardId === id);
        setShownCards(prevCards =>
            prevCards.find(({id: cardId}) => cardId === id) ? [...prevCards] : [...prevCards, card]
        );
        setFieldCards(prevFieldCards => manageCards(prevFieldCards, card, undefined, card?.points));
    };

    const handleRestart = () => {
        if (isIncorrect) setIsIncorrect(false);
        setShownCards(cards);
        setPoints({
            upperField: 0,
            bottomField: 0
        });
        setFieldCards({
            upperField: [],
            bottomField: []
        })
    };

    useEffect(() => {
       if (shownCards.length > 0) return;

       if (points[FIELDS.upperField] === points[FIELDS.bottomField]) setIsCorrect(true);
       else setIsIncorrect(true);

    }, [points, shownCards]);

    useEffect(() => {
        let topValue;
        if (isRules) {
            const bottomY = bottomFieldRef?.current.offsetTop;
            const topY = upperFieldRef?.current.offsetTop;
            const topH = upperFieldRef?.current.clientHeight;
            const placeH = placeRef?.current.clientHeight;
            switch (rulesStage) {
                case 0:
                    topValue = blockRef?.current.offsetTop + blockRef?.current.clientHeight + 10;
                    break;
                case 1:
                    const distance = (bottomY - topH - topY - placeH) / 2;
                    topValue = topH + topY + distance;
                    break;
                default:
                    break;
            }
        }
        setTop(topValue);
    }, [isRules, rulesStage]);

    const handleNextRule = () => {
        if (rulesStage === 2) {
            setRulesStage(0);
            setIsRules(false);
        } else {
            setRulesStage(stage => stage + 1);
        }
    };

    const handlePrevRule = () => {
        if (rulesStage === 0) return;

        setRulesStage(stage => stage - 1);
    };

    return (
        <Wrapper>
            <Content>
                <ButtonsBlock ref={blockRef}>
                    <RefreshButton onClick={handleRestart} />
                    <LevelInfo>УРОВЕНЬ {level}</LevelInfo>
                    <RulesButton onClick={() => setIsRules(true)}/>
                </ButtonsBlock>
                <DndProvider options={HTML5toTouch}>
                    <Field
                        key={'upperField'}
                        fieldRef={upperFieldRef}
                        cards={fieldCards[FIELDS.upperField]}
                        maxCards={cards.length}
                        onCardDrop={handleUpperFieldDrop}
                        points={points[FIELDS.upperField]}
                        isNotDrop={isRules || isCorrect}
                        color={'#45B3E9'}
                        isOnTop={isRules && rulesStage === 1}
                    />
                    <CardsPlace
                        onCardDrop={handleReturnCard}
                        isNotDrop={isRules || isCorrect}
                        isOnTop={isRules && rulesStage === 0}
                        placeRef={placeRef}
                        maxCards={cards.length}
                    >
                        {shownCards.map(card => (
                            <Card
                                key={card.id}
                                card={card}
                                isNotDraggable={isRules || isCorrect}
                                onClick={() => setCardInfo({shown: true, card: card})}
                                isShowPoints
                            />
                        ))}
                        {cardInfo.shown && (
                            <CardInfo
                                card={cardInfo.card}
                                onClose={() => setCardInfo({shown: false, card: {}})}
                            />
                        )}
                        {isCorrect && (
                            <DoneModal onNext={onNext}/>
                        )}
                    </CardsPlace>
                    <Field
                        key={'bottomField'}
                        fieldRef={bottomFieldRef}
                        cards={fieldCards[FIELDS.bottomField]}
                        maxCards={cards.length}
                        onCardDrop={handleBottomFieldDrop}
                        points={points[FIELDS.bottomField]}
                        isNotDrop={isRules || isCorrect}
                        color={'#E94969'}
                        isOnTop={isRules && rulesStage === 1}
                        isBottom
                    />
                </DndProvider>
                {isRules && <RulesModal
                    onNext={handleNextRule}
                    rulesStage={rulesStage}
                    onPrev={handlePrevRule}
                    top={top}
                />}
                {isIncorrect && (
                    <IncorrectModal
                        text={
                            'Упс! Давай подумаем ещё — \nв блоках разная энергия. \n' +
                            '\n' +
                            'Попробуй другую комбинацию, чтобы по итогу получить баланс.'
                        }
                        btnText={'Продолжить'}
                        icon={errorIcon}
                        onClick={handleRestart}
                    />
                )}
            </Content>
        </Wrapper>
    )
}