import { useRoutes } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
export default function Guest() {
  const Routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          <a href="/single-responsibility-principle">S</a>.
          <a href="/open-closed-principle">O</a>.
          <a href="/liskov-substitution-principle">L</a>.
          <a href="/interface-segregation-principle">I</a>.
          <a href="/dependency-inversion-principle">D</a> - com React <FaBeer />
        </>
      ),
    },
    {
      path: "/login",
      element: <></>,
    },
  ]);

  return Routes;
}
