import { Header } from '~widgets/Header';
import s from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from '~widgets/Footer';

export const MainLayout = () => {
    return (
        <div className={s.mainLayout}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
