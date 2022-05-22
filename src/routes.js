import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from './pages/App';
import Details from './pages/Details';

export const MAIN_ROUTE = 'MAIN_ROUTE';
export const DETAILS_ROUTE = 'DETAILS_ROUTE';


const routes = [
    {
        id: MAIN_ROUTE,
        path: '/',
        element: <App/>
    },
    {
        id: DETAILS_ROUTE,
        path: '/people/:id',
        element: <Details/>
    },
];

export default function AppRoutes() {
    return (
        <Router>
          <Routes>
            {routes.map(route => {
                const {id, ...props} = route;
                return(<Route key = {id} {...props} />)
            })}
          </Routes>
        </Router>
    )
}