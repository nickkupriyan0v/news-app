import { Link } from 'react-router-dom';
import s from './Feed.module.scss';
import { Post } from '~entities/Post';

export const Feed = () => {
    const newsList = new Array(20).fill(1).map((_, index) => ({ id: index }));
    return (
        <div className={s.newsList}>
            {newsList.map((item) => (
                <Link
                    key={item.id}
                    className={s.postLink}
                    to={`post/${item.id}`}
                >
                    <Post />
                </Link>
            ))}
        </div>
    );
};
