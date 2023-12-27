import PropertyOverview from "./Overviews/propertyOverview"
import SalesOverview  from "./Overviews/salesOverview"
import CustomersOverview  from "./Overviews/customersOverview"
import { ListingOverviewCard } from "@/components/Card/listingOverviewCard"
import { OutstandingOverviewCard } from "@/components/Card/outstandingCard"
import { TopSellingCard } from "@/components/Card/topSellingCard"

import Image from 'next/image'

const Dashboard = () => {
    return (
        <main className="px-4 md:px-12">

            <div className="flex flex-row item-center gap-2">
             <Image width={29} height={29} src="/assets/images/HiFive.svg" alt="Hello Ahmed"/>
              <h2 className="text-[20px] font-[600] text-[#191919]">Hi Ahmed</h2>
              </div>

              <p className="text-[15px] text-[#3D3d3d] mt-5">Welcome to your dashboard</p>

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