import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import {NotFoundPage} from "pages/NotFoundPage";

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
    'NOT_FOUND' = 'not_found'
}

const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPath.not_found,
        element: <NotFoundPage />
    }
};
