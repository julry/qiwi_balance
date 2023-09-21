import { useState } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { openTg } from '../../../utils/openTg';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { Game } from '../../shared/Game';
import { TgModal } from '../../shared/TgModal';
import { Link } from '../../shared/Link';
import { icon1, icon2, icon3, icon4, icon5 } from './icons';

export const Screen3 = () => {
    const {next} = useProgress();
    const [isTgModal, setIsTgModal] = useState(false);

    const handleNext = () => {
        reachMetrikaGoal('continue1');
        next();
    };

    const handleFinish = () => {
        reachMetrikaGoal('level2');
        setIsTgModal(true);
    };

    const handleOpenTg = () => {
        reachMetrikaGoal('click1');
        openTg();
    };

    const cards = [
        {
            id: 0,
            text: 'Написать экзамен',
            points: -5,
            shownPoints: '-5',
            icon: icon1,
        },
        {
            id: 1,
            text: 'Обед с коллегами',
            points: 4,
            shownPoints: '+4',
            icon: icon2,
        },
        {
            id: 2,
            text: 'Найти рефы для новой фичи в скоуп',
            points: -3,
            shownPoints: '-10+7',
            icon: icon3,
        },
        {
            id: 3,
            text: 'Изучить бэклог грядущего спринта',
            points: 5,
            shownPoints: '-3+8',
            icon: icon4
        },
        {
            id: 4,
            text: 'Блеснуть умом на квизе\nс коллегами',
            points: 3,
            shownPoints: '+4-1',
            icon: icon5
        },
    ];

    const text = () => <>
        {
            'Ты круто справляешься, айтишники всех ' +
            'отделов QIWI уже хотят тебя к себе в команду! \n' +
            '\n' +
            'Загляни в tg-канал '}
        <Link onClick={handleOpenTg}>QIWI INSIDE</Link>
        {
            ', чтобы разузнать все секреты ' +
            'об ИТ-карьере и ощутить себя сотрудником компании.\n' +
            '\n' +
            'Или сделай это позже, а сейчас иди до победного — реши все уравнения!'
        }
    </>

    return (
        <>
            <Game cards={cards} level={2} onNext={handleFinish}/>
            {isTgModal && <TgModal onNext={handleNext} text={text}/>}
        </>
    )
}