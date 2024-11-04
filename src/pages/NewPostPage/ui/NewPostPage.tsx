import { Editor } from '~widgets/Editor';
import s from './NewPostPage.module.scss';

export const NewPostPage = () => {
    return (
        <div className={s.newPostPage}>
            <div>NewPostPage</div>
            <Editor />
        </div>
    );
};
