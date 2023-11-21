import { Outlet } from 'react-router-dom';
import Header from '../../components/Intro/Header';
import Footer from '../../components/Intro/Footer';



export default function IntroLayout() {
    

    return (
        <div className='body'>
            <Header />
            <main className="page=wrapper">
                <Outlet />
                      
            </main>
            <Footer />
        </div>
    );
}
