import { useRoutes, Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import SRP from './SRP'
import OCP from './OCP'
import LSP from './LSP'
import ISP from './ISP'
import DIP from './DIP'

export default function Guest() {
  const Routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/single-responsibility-principle" />,
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
      ],
    },
  ])

  return Routes
}
