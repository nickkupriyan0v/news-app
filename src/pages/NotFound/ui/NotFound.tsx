import s from './NotFound.module.scss';

export const NotFound = () => {
    return (
        <div className={s.notFound}>
            <h2>Упс</h2>
            <p>Что-то пошло не так</p>
        </div>
    );
};
