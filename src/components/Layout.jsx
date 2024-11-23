import { Outlet } from "react-router"
import Nav from './Nav'

const Layout = () => {
  return (
    <section className="w-screen min-h-screen bg-[#fffafa] text-[#111]">
    <Nav />
    <Outlet />
    </section>
  )
}

export default Layout