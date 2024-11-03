import { Post } from '~entities/Post';
import s from './PostPage.module.scss';
import { Comments } from '~widgets/Comments';

export const PostPage = () => {
    return (
        <div className={s.postPage}>
            <Post></Post>
            <Comments></Comments>
        </div>
    );
};
