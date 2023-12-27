import { DownNav } from "./downnav.dashboard"
import { TopNav } from "./topnav.dashboard"


export const DashboardNavigation = () => {
    return (
        <nav className="fixed top-0 z-[100] w-screen">
          <TopNav />
          <DownNav />
        </nav>
    )
}