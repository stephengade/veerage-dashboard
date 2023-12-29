import { SaleBalanceSummary } from "@/components/Card/saleBalanceCard"
import BalanceChart from "./BalanceChart"

interface iProgress {
   progress: "up" | "down"
}
const OverviewChart = () => {
   const amount = ["0.00", "0.00", "0.00", "0.00"]
   const progress = ["up", "up", "up", "down"] as const
   const title = ["Balance", "Deposit", "Purchase", "Withdrawal"]
   const percent = ["0", "10", "5", "6"]

   let SummaryData = []

   for (let selector = 0; selector < amount.length; selector++) {
      SummaryData.push({amount: amount[selector], progress: progress[selector], percent: percent[selector], title: title[selector]})
   }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
     <div className="chart_here">
         <BalanceChart />
     </div>
      
      <SaleBalanceSummary SalesData={SummaryData} /> 

        </div>
    )
}

export default OverviewChart