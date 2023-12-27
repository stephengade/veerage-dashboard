import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io"

type TOverviewCard = {
    text: string
    value: string | number
}

interface iOverview {
    overviewData: TOverviewCard[]
    type: "property" | "customers"
    title: string
    goToLink: string
}

const OverviewIcons = {
    "property": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 14.9922C10.3432 14.9922 9 16.3353 9 17.9922V23.9922H15V17.9922C15 16.3353 13.6568 14.9922 12 14.9922Z" fill="#4545FE" />
        <path d="M17 17.9929V23.9929H21C22.6568 23.9929 24 22.6497 24 20.9929V11.8719C24.0002 11.3524 23.7983 10.8532 23.437 10.4799L14.939 1.29285C13.4396 -0.329491 10.9089 -0.4291 9.28655 1.07034C9.20949 1.14159 9.13523 1.21579 9.06403 1.29285L0.581016 10.4769C0.208734 10.8517 -0.000140554 11.3586 7.09607e-08 11.8869V20.9929C7.09607e-08 22.6497 1.34316 23.9929 3 23.9929H6.99998V17.9929C7.01869 15.2661 9.22027 13.0393 11.8784 12.9752C14.6255 12.9089 16.9791 15.1736 17 17.9929Z" fill="#4545FE" />
        <path d="M12 14.9922C10.3432 14.9922 9 16.3353 9 17.9922V23.9922H15V17.9922C15 16.3353 13.6568 14.9922 12 14.9922Z" fill="#4545FE" />
    </svg>,
    "customers": <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z" fill="#4545FE" />
    </svg>
}

export const OverviewSummaryCard = ({ overviewData, type, title, goToLink = "/" }: iOverview) => {

    return (
        <div className="bg-[white] py-[12.5px] px-[20px] rounded-[16px] shadow-sm" >


            {/* =========  the header =======*/}
            <div className="flex flex-row items-center justify-between">
                <div className="overview__title flex flex-row items-center gap-2">
                    <span>{OverviewIcons[type]}</span>
                    <h2 className="text-[14px] text-vrBlack font-[500]">{title}</h2>
                </div>

                {/* view all link */}
                <Link href={goToLink} className="text-[12px] text-[#cbcbcb] flex flex-row items-center gap-1">
                    <span>view all</span>
                    <IoIosArrowForward className="" />

                </Link>
            </div>


            {/* ======= map the cards here ====== */}
            <div className={`grid grid-cols-1 ${type === "customers" ? "md:grid-cols-4" : "md:grid-cols-3"} items-center gap-6 mt-6`}>
                {overviewData.map(({ text, value }) => {
                    return (
                        <span key={text} className="border-[1px] text-center p-3 border-solid border-[#f5f5f5] rounded-[12px] bg-[white]">
                            <h3 className="text-[24px] text-vrBlack font-[600]">{value}</h3>

                            <p className="text-[12px] text-[#606060] mt-5 font-[200]">{text}</p>
                        </span>
                    )
                })}
            </div>


            {/* =======  cards end ====== */}

        </div>
    )
}