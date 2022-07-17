import { HomePage } from './components/pages/Home/views/HomePage';
import { NumberListPageWrapper } from './components/pages/NumberList/views/NumberListPageWrapper';
import { NumberQuizPageWrapper } from './components/pages/NumberQuiz/views/NumberQuizPageWrapper';
import { SolomonDemonListPageWrapper } from './components/pages/SolomonDemonList/views/SolomonDemonListPageWrapper';
import { FesPageWrapper } from './components/pages/Fes/views/FesPageWrapper';

const AppRoutes = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: '/number_list',
        element: <NumberListPageWrapper />,
    },
    {
        path: '/number_quiz',
        element: <NumberQuizPageWrapper />,
    },
    {
        path: '/solomon_demon_list',
        element: <SolomonDemonListPageWrapper />,
    },
    {
        path: '/fes',
        element: <FesPageWrapper />,
    },
];

export default AppRoutes;
