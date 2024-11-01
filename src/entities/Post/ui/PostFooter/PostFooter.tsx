import { FaCommentAlt, FaShareAlt, FaBookmark } from 'react-icons/fa';
import s from './PostFooter.module.scss';

export const PostFooter = () => {
    return (
        <div className={s.postFooter}>
            <div className={s.footerItem}>
                <FaCommentAlt />
                <span>123</span>
            </div>
            <div className={s.footerItem}>
                <FaShareAlt />
                <span>123</span>

            </div>
            <div className={s.footerItem}>
                <FaBookmark />
                <span>123</span>
            </div>
        </div>
    );
};
