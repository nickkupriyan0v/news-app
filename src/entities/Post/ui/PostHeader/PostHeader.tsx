import { Avatar } from '~shared/ui/Avatar';
import s from './PostHeader.module.scss';
import { Button } from '~shared/ui/Button';

export const PostHeader = () => {
    return (
        <div className={s.postHeader}>
            <Avatar />
            <div className={s.postMeta}>
                <div>author name</div>
                <div>post theme</div>
            </div>
            <div>
                <Button>test</Button>
            </div>
        </div>
    );
};
