import { Chart, iSeries } from "@/components/Chart/chart"

const BalanceChart = () => {

  const Data: iSeries[] = [
    {
      name: "Customers",
      data: [20, 10, 15, 9, 25, 11, 30],
      type: "line"
    },

    {
      name: "Property Sold",
      data: [27, 15, 12, 10, 19, 30, 51],
      type: "column",

    }

  ]

  if(Data.length < 0) {
    return <p>loading...</p>
  }

    return (
        <Chart
        title="Conversion Rate"
        subtitle="How much you have sell over the years"
        type="line"
        chartId="user-chart"

        categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"]}

        seriesData={Data}
        seriesLabel={["one", "two", "three", "four", "five", "six", "seven"]}
        gridColor={"transparent"}
        curve="smooth"

      />
    

    )
}

export default BalanceChart