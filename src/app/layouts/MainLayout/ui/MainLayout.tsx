import { Header } from '~widgets/Header';
import s from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { Footer } from '~widgets/Footer';
import { Sidebar } from '~widgets/Sidebar';

export const MainLayout = () => {
    return (
        <div className={s.mainLayout}>
            <Header />
            <main>
                <div>
                    <Outlet />
                </div>
                <Sidebar />
            </main>
            <Footer />
        </div>
    );
};
