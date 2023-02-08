import { Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <>
      <div>
        <a href="/single-responsibility-principle">S</a>.
        <a href="/open-closed-principle">O</a>.
        <a href="/liskov-substitution-principle">L</a>.
        <a href="/interface-segregation-principle">I</a>.
        <a href="/dependency-inversion-principle">D</a> - com React
      </div>
      <Outlet />
    </>
  )
}
