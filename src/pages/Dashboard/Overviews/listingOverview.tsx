import { ListingOverviewCard, iPlaceholder } from "@/components/Card/listingOverviewCard"

const ImagePlaceholder = '/assets/images/listingPlaceholder.png'

const ListingOverview = () => {
    const listingImage1 = ImagePlaceholder
    const listingImage2 = ImagePlaceholder
    const listingImage3 = ImagePlaceholder

    const Title1 = "Most viewed"
    const Title2 = "Most shared"
    const Title3 = "Most watchlisted"

    const value1 = 0
    const value2 = 0
    const value3 = 0

    const watchListValue = 0
    const watchListTitle = "Number of watchlists"

    let listingImage = [listingImage1, listingImage2]
    let title = [Title1, Title2]
    let value = [value1, value2]

    let data: iPlaceholder[] = []

    for (let i = 0; i < title.length; i++) {
        data.push({ title: title[i], listingImage: listingImage[i], value: value[i] })
    }


    return (
        <ListingOverviewCard data={data} title3={Title3} value3={value3} listingImage3={listingImage3} watchListTitle={watchListTitle} watchListValue={watchListValue} />
    )
}

export default ListingOverview