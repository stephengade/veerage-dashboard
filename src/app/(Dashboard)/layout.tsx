import { DashboardNavigation } from "@/components/Navigation/DashboardNavigation/Navigation.dashboard"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="bg-[#f5f5f5] min-h-screen">
        <DashboardNavigation />
        <section className="mt-[120px] pt-[40px]">{children} </section>
        </main>
    )
}

export default DashboardLayout