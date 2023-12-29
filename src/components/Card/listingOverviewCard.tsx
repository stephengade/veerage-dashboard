
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io"


export interface iPlaceholder {
    listingImage: string
    title: string
    value: string | number
    placeholderStyle?: string
}

interface iListingCard {
    goToLink?: string
    data: iPlaceholder[]
    placeholderStyle?: string
    title3: string
    value3: string | number
    listingImage3: string
    watchListTitle: string
    watchListValue: string | number
}

export const ListingPlaceholder = (props: iPlaceholder) => {
    const { listingImage, title, value, placeholderStyle } = props
    return (
        <div>
            <p className="text-[10px] text-vrBlack mb-1">{title}</p>
            {title.toLowerCase() !== "most watchlisted" && <hr className="mt-1 mb-3 bg-[#f5f5f5] -z-3" />}
            <div className="flex flex-row gap-2 items-center">
                <span className={`p-5 bg-[#f5f5f5] rounded-[12px] border-[1px] solid ${placeholderStyle}`}>
                    <Image className="w-[36px] h-[36px] rounded-[12px]" src={listingImage} alt={title} width={36} height={36} />
                </span>
                <h2 className="text-[20px] text-vrBlack font-[600]">{value === 0 && "None"}</h2>
            </div>
        </div>
    )
}

export const ListingWatchList = ({ watchListValue, watchListTitle }: { watchListValue: string | number, watchListTitle: string }) => {
    return (
        <div className="px-3 py-3 bg-[#ffffff] rounded-[12px] border-[1px] solid ">
            <span className="flex flex-row items-center justify-between">
                <p className="text-[24px] text-[#191919]">{watchListValue}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22 9.62H15.75C16.18 9.62 16.53 9.269 16.53 8.83C16.53 8.39 16.18 8.04 15.75 8.04H8.22C7.79 8.04 7.44 8.39 7.44 8.83C7.44 9.269 7.79 9.62 8.22 9.62Z" fill="#CBCBCB" />
                </svg>
            </span>

            <p className="text-[10px] text-vrBlack">{watchListTitle}</p>
        </div>
    )
}


export const ListingOverviewCard = (props: iListingCard) => {
    const { goToLink = '/listing', data, value3, title3, listingImage3, watchListTitle, watchListValue } = props
    return (
        <Box display="block" padding="20px 12.5px" borderRadius="16px" boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)" backgroundColor="#ffffff">
            {/* =========  the header =======*/}
            <div className="flex flex-row items-center justify-between">
                <div className="overview__title flex flex-row items-center gap-2">

                    <h2 className="text-[18px] text-vrBlack font-[600]">Listing Overview</h2>
                </div>

                {/* view all link */}
                <Link href={goToLink} className="text-[12px] text-[#cbcbcb] flex flex-row items-center gap-1">
                    <span>view all</span>
                    <IoIosArrowForward className="" />

                </Link>
            </div>

            {/* =========  the body =======*/}

            <div className="grid grid-cols-2 justify-between mt-5">
                {data && data.map(({ title, listingImage, value }, index) => {
                    return (
                        <div key={index} className="">
                            <ListingPlaceholder value={value} title={title} placeholderStyle={index === 0 ? "border-vrLemon" : "border-vrBlue"} listingImage={listingImage} />
                        </div>)
                })}


            </div>

            {/* featured listing */}
            <div className="bg-[#f5f5f5] p-4 rounded-[12px] grid grid-cols-1 md:grid-cols-2 items-end justify-between mt-6">
                <ListingPlaceholder value={value3} title={title3} placeholderStyle="border-vrYellow" listingImage={listingImage3} />
                <ListingWatchList watchListTitle={watchListTitle} watchListValue={watchListValue} />
            </div>




        </Box>
    )
}