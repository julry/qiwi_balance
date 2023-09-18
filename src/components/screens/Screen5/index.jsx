import { useState } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { openTg } from '../../../utils/openTg';
import { Game } from '../../shared/Game';
import { TgModal } from '../../shared/TgModal';
import { Link } from '../../shared/Link';
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7 } from './icons';

export const Screen5 = () => {
    const [isTgModal, setIsTgModal] = useState(false);
    const {next} = useProgress();
    const cards = [
        {
            id: 0,
            text: 'Начать писать\nдоклад',
            points: -6,
            shownPoints: '-6',
            icon: icon1,
        },
        {
            id: 1,
            text: 'Задеплоить код — ура, твой первый проект успешно завершён!',
            points: 4,
            shownPoints: '-5+9',
            icon: icon2,
        },
        {
            id: 2,
            text: 'Задать вопросы \nна прямом эфире \nс CEO QIWI',
            points: 2,
            shownPoints: '+3-1',
            icon: icon3,
        },
        {
            id: 3,
            text: 'Наметить флоу нового сложного проекта',
            points: -5,
            shownPoints: '-5',
            icon: icon4
        },
        {
            id: 4,
            text: 'Задать много вопросов бадди \nи получить много адекватных ответов',
            points: 6,
            shownPoints: '+7-1',
            icon: icon5,
        },
        {
            id: 5,
            text: 'Сходить \nк стоматологу \nза счёт компании :)',
            points: 3,
            shownPoints: '-3+6',
            icon: icon6,
        },
        {
            id: 6,
            text: 'Ужин с друзьями\nна веранде',
            points: 4,
            shownPoints: '+4',
            icon: icon7
        },
    ];

    const text = () => <>
        {
            'Вау, у тебя точно настрой на победу! \n' +
            '\n' +
            'Загляни в tg-канал '}
        <Link onClick={openTg}>QIWI INSIDE</Link>
        {
            ', чтобы разузнать все секреты ' +
            'об ИТ-карьере и ощутить себя сотрудником компании.\n' +
            '\n' +
            'Или сделай это позже, а сейчас иди до победного. Осталось ' +
            ' решить всего одно уравнение, и ты получишь шанс выиграть крутые призы от QIWI!'
        }
    </>

    return (
        <>
            <Game cards={cards} level={4} onNext={() => setIsTgModal(true)}/>
            {isTgModal && <TgModal onNext={next} text={text}/>}
        </>
    );
};
