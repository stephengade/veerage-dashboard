import { OverviewSummaryCard } from "@/components/Card/overviewSummaryCard";

export const PropertyOverview = () => {

  const labels = ["Total", "Available", "Sold Out"]
  const values = [0, 0, 0]

  let PropertyCardData = []

  for (let i = 0; i < labels.length; i++) {
    PropertyCardData.push({ text: labels[i], value: values[i] })
  }

  return (
    <OverviewSummaryCard overviewData={PropertyCardData} type="property" title="Property Overview" goToLink="/listings" />
  );
};
