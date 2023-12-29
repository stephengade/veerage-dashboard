import { TopSellingCard } from "@/components/Card/topSellingCard"

const TopSellingOverview = () => {
    const ImagePlaceholder = '/assets/images/listingPlaceholder.png'
    const unitSold = 0
    const amount = "0.00"
    const title="Total sold"
    const value=0
    return (
        <TopSellingCard amount={amount} title={title} value={value} topSellingImage={ImagePlaceholder} unitSold={unitSold} />
    )
}

export default TopSellingOverview