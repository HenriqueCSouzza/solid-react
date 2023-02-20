import { useRoutes, Navigate } from 'react-router-dom'
import Dashboard from './template/Dashboard'
import UsersPage from './pages/Users'
import SRP from './examples/SRP'
import OCP from './examples/OCP'
import LSP from './examples/LSP'
import ISP from './examples/ISP'
import DIP from './examples/DIP'

export default function Guest() {
  const Routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/users" />,
    },
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: '/single-responsibility-principle',
          element: <SRP />,
        },
        {
          path: '/open-closed-principle',
          element: <OCP />,
        },
        {
          path: '/liskov-substitution-principle',
          element: <LSP />,
        },
        {
          path: '/interface-segregation-principle',
          element: <ISP />,
        },
        {
          path: '/dependency-inversion-principle',
          element: <DIP />,
        },
        {
          path: '/users',
          element: <UsersPage />,
        },
      ],
    },
  ])

  return Routes
}
