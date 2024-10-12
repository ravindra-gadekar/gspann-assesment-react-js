import { createBrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Products from './components/products/Products';

const router = Router([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
            },
        ],
    },
]);

export default router;
