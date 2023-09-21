import { useProgress } from '../../../hooks/useProgress';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { Game } from '../../shared/Game';
import { icon1, icon2, icon3, icon4, icon5, icon6 } from './icons';

export const Screen4 = () => {
    const {next} = useProgress();

    const handleNext = () => {
        reachMetrikaGoal('level3');
        next();
    };

    const cards = [
        {
            id: 0,
            text: 'Быстрый созвон \nс однокурсницей \nпо домашке',
            points: -1,
            shownPoints: '-1',
            icon: icon1,
        },
        {
            id: 1,
            text: 'Кофебрейк с бадди \nиз дома в тапочках \nи пижаме',
            points: 5,
            shownPoints: '+5',
            icon: icon2,
        },
        {
            id: 2,
            text: 'Урок английского \nза счёт компании',
            points: 3,
            shownPoints: '+7-4',
            icon: icon3,
        },
        {
            id: 3,
            text: 'Закомплитить первую таску',
            points: 2,
            shownPoints: '-8+10',
            icon: icon4
        },
        {
            id: 4,
            text: 'Баскетбол \nс друзьями',
            points: 5,
            shownPoints: '+9-4',
            icon: icon5
        },
        {
            id: 5,
            text: 'Просмотр любимого сериала',
            points: 4,
            shownPoints: '+4',
            icon: icon6
        },
    ];

    return <Game cards={cards} level={3} onNext={handleNext}/>
};
