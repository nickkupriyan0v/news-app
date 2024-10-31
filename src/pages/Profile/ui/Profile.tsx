import { Post } from '~entities/Post';
import s from './Profile.module.scss';

export const Profile = () => {
    const newsList = new Array(20).fill(1).map((_, index) => ({ id: index }));

    return (
        <div className={s.profile}>
            <div className={s.profileCard}>
                <div className={s.cover}></div>
                <div className={s.avatar}></div>
                <div className={s.content}>
                    <h1>Иванов Иван Иванович</h1>
                    <h4>c 12.12.2010</h4>
                </div>
            </div>

            <div className={s.postsList}>
                {newsList.map((item) => (
                    <div key={item.id}>
                        <Post />
                    </div>
                ))}
            </div>
        </div>
    );
};
