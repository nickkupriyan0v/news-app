import s from './Feed.module.scss';
import { Post } from '~entities/Post';

export const Feed = () => {
    const newsList = new Array(20).fill(1).map((_, index) => ({ id: index }));
    return (
        <div>
            <h2>Feed</h2>

            <div className={s.newsList}>
                {newsList.map((item) => (
                    <div key={item.id}>
                        <Post />
                    </div>
                ))}
            </div>
        </div>
    );
};
