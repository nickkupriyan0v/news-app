import { Card } from '~shared/ui/Card';
import s from './Feed.module.scss';

export const Feed = () => {
    const newsList = new Array(20).fill(1).map((_, index) => ({ id: index }));
    return (
        <div>
            <h2>Feed</h2>

            <div className={s.newsList}>
                {newsList.map((item) => (
                    <div key={item.id}>
                        <Card />
                    </div>
                ))}
            </div>
        </div>
    );
};
