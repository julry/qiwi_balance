import { useProgress } from '../../../hooks/useProgress';
import { Game } from '../../shared/Game';
import { icon1, icon2, icon3, icon4, icon5 } from './icons';

export const Screen3 = () => {
    const {next} = useProgress();
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
            points: 3,
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
            text: 'Блеснуть умом на квизе с коллегами',
            points: -3,
            shownPoints: '-4+1',
            icon: icon5
        },
    ];

    return <Game cards={cards} level={2} onNext={next}/>
}