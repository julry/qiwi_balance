import { useState } from 'react';
import { LastModal } from '../../shared/LastModal';
import { Game } from '../../shared/Game';
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8 } from './icons';
import { openTg } from '../../../utils/openTg';

export const Screen6 = () => {
    const [isLastModal, setIsLastModal] = useState(true);

    const cards = [
        {
            id: 0,
            text: 'Закончить писать доклад по универской практике',
            points: -3,
            shownPoints: '-3',
            icon: icon1,
        },
        {
            id: 1,
            text: 'Допинать \nту самую сложную таску',
            points: 5,
            shownPoints: '-7+12',
            icon: icon2,
        },
        {
            id: 2,
            text: 'Первый еженедельный чек \nс наставником',
            points: 2,
            shownPoints: '-3+5',
            icon: icon3,
        },
        {
            id: 3,
            text: 'Работа над ошибками \nпо проекту',
            points: -2,
            shownPoints: '-5+3',
            icon: icon4
        },
        {
            id: 4,
            text: 'Занятие \nпо большому теннису \nс коллегами',
            points: 4,
            shownPoints: '-6+10',
            icon: icon5,
        },
        {
            id: 5,
            text: 'Выбрать онлайн-курс на внутреннем обучающем портале QAMPUS',
            points: 4,
            shownPoints: '+4',
            icon: icon6,
        },
        {
            id: 6,
            text: 'Сходить в универ \nна консультацию',
            points: -6,
            shownPoints: '-8+2',
            icon: icon7,
        },
        {
            id: 7,
            text: 'Пойти на ночной концерт со второй половинкой',
            points: 8,
            shownPoints: '+13-5',
            icon: icon8
        },
    ];

    return (
        <>
            <Game cards={cards} level={5} onNext={() => setIsLastModal(true)}/>
            {isLastModal && <LastModal onNext={openTg}/>}
        </>
    )

}