import { Avatar } from '~shared/ui/Avatar';
import s from './CommentHeader.module.scss';

export const CommentHeader = () => {
    return (
        <div className={s.commentHeader}>
            <Avatar />
            <div className={s.commentMeta}>
                <div>UserName</div>
                <div>1 hour ago</div>
            </div>
        </div>
    );
};
