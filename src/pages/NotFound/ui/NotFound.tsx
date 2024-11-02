import { Card } from '~shared/ui/Card';
import s from './NotFound.module.scss';

export const NotFound = () => {
    return (
        <Card>
            <div className={s.notFound}>
                <h2>Упс</h2>
                <p>Что-то пошло не так</p>
            </div>
        </Card>
    );
};
