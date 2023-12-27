import { OverviewSummaryCard } from "@/components/Card/overviewSummaryCard";

const CustomersOverview = () => {

  const labels = ["Total", "New", "Active", "Inactive"]
  const values = [0, 0, 0, 0]

  let CustomerCardData = []

  for (let i = 0; i < labels.length; i++) {
    CustomerCardData.push({ text: labels[i], value: values[i] })
  }

  return (
    <OverviewSummaryCard overviewData={CustomerCardData} type="customers" title="Customers Overview" goToLink="/listings" />
  );
};

export default CustomersOverview 