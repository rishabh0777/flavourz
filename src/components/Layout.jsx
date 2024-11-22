import { Outlet } from "react-router"
import Nav from './Nav'

const Layout = () => {
  return (
    <section className="w-screen min-h-screen">
    <Nav />
    <Outlet />
    </section>
  )
}

export default Layout