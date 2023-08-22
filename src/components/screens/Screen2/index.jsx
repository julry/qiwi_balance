import { useProgress } from '../../../hooks/useProgress';
import { Game } from '../../shared/Game';
import {icon1, icon2, icon3, icon4} from './icons';

export const Screen2 = () => {
    const {next} = useProgress();
    const cards = [
        {
            id: 0,
            text: 'Онбординг с коллегами',
            points: 3,
            shownPoints: '+3',
            icon: icon1,
        },
        {
            id: 1,
            text: 'Экскурсия по разным локациям уютного «QIWI Дома»',
            points: 5,
            shownPoints: '-1+6',
            icon: icon2,
        },
        {
            id: 2,
            text: 'Вход в рабочие учётки\nи тасктрекеры\n(ты теперь важная персона)',
            points: 6,
            shownPoints: '-1+7',
            icon: icon3,
        },
        {
            id: 3,
            text: 'Подготовка к экзамену\nв вузе',
            points: -4,
            shownPoints: '-4',
            icon: icon4
        },
    ];

    return <Game isFirstTime cards={cards} level={1} onNext={next}/>
}