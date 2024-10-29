import { Card } from '~shared/ui/Card';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <Card>most popular authors</Card>
            <Card>most popular tags</Card>
        </div>
    );
};
