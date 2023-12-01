import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'react-ui';

// Project Delirate
import HomeScreen from './screens/Client/Home';
import LoginScreen from './screens/Client/Login';
import RootLayout from './screens/Client/Root';
import OTPVerifyScreen from './screens/Client/OTPVerify';
import ItemScreen from './screens/Client/Item';
import PricingScreen from './screens/Client/Pricing';
import RegisterScreen from './screens/Client/Register';
import CreateItemScreen from './screens/Client/CreateItem';

// Admin Delirate
import AdminLayout from './screens/Admin/Admin';
import OrderScreen from './screens/Admin/Order';
import DashboardScreen from './screens/Admin/Dashboard';

// Introdution
import IntroLayout from './screens/Intro/Layout';
import LandingScreen from './screens/Intro/Landing';
import SuccessScreen from './screens/Client/Success';
import CheckoutScreen from './screens/Client/Checkout';
import LoaderScreen from './screens/Client/Loader';
import ExamplesScreen from './screens/Client/Examples';


const router = createBrowserRouter([  
    {
        path: '/',
        element: <RootLayout isLoading={true} loadingTime={3200} />,
        children: [
            { path: '/', element: <HomeScreen /> },
            { path: '/login', element: <LoginScreen /> },
            { path: '/register', element: <RegisterScreen /> },
            { path: '/confirm_otp', element: <OTPVerifyScreen /> },
            { path: '/items', element: <ItemScreen /> },
            { path: '/pricing', element: <PricingScreen /> },
            { path: '/create', element: <CreateItemScreen /> },
            { path: '/examples', element: <ExamplesScreen /> },
            { path: '/checkout', element: <CheckoutScreen /> },
            { path: '/success', element: <SuccessScreen /> },
            { path: '/stripe-success', element: <LoaderScreen /> },
            
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [{ path: '/admin/dashboard', element: <OrderScreen /> }],
    },
    {
        path: '/about',
        element: <IntroLayout />,
        children: [
            { 
                path: '/about', element: <LandingScreen />
            }
        ]
    }
]);

function App() {
    return <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
}

export default App;
