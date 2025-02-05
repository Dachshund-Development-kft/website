import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import MainPage from './pages/mainPage'
import StatisticPage from './pages/statisticPage'
import TeamPage from './pages/teamPage'
import ErrorPage from './pages/404Page'
import LoginPage from './pages/loginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/statistic',
    element: <StatisticPage />,
  }, 
  {
    path: '/team',
    element: <TeamPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <p>Sigma</p>,
  },
  {
    path: '*',
    element: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)