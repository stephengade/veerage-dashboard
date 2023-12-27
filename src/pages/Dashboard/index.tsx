import PropertyOverview from "./Overviews/propertyOverview"
import SalesOverview  from "./Overviews/salesOverview"
import CustomersOverview  from "./Overviews/customersOverview"
import { ListingOverviewCard } from "@/components/Card/listingOverviewCard"
import { OutstandingOverviewCard } from "@/components/Card/outstandingCard"
import { TopSellingCard } from "@/components/Card/topSellingCard"

const Dashboard = () => {
    return (
        <main className="px-4 md:px-12">

            <div className="">
            <h2>Hey Champ</h2>
              </div>

            <section className="grid md:auto-rows-fr grid-cols-1 md:grid-cols-3 gap-5 mt-7">

                <div className="w-full h-full md:col-span-2">
                    <SalesOverview />
                </div>

                <article className="space-y-5 h-full md:col-span-1">
                    <PropertyOverview />
                    <CustomersOverview />
                </article>

            </section>

            <section className="grid md:auto-rows-fr grid-cols-1 md:grid-cols-3 gap-5 mt-8 pb-8">
            <ListingOverviewCard />
            <OutstandingOverviewCard />
            <TopSellingCard />
        </section>

        </main>
    )
}

export default Dashboard