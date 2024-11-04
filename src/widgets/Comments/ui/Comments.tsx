import { Card } from '~shared/ui/Card';
import s from './Comments.module.scss';
import { Comment } from '~entities/Comment';
export const Comments = () => {
    return (
        <Card>
            <div className={s.comments}>
                {[1, 2, 3].map((item) => (
                    <div key={item}>
                        <Comment />
                    </div>
                ))}
            </div>
        </Card>
    );
};
