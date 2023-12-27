
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"


interface iOutstanding {
  goToLink?: string
 
}



export const OutstandingOverviewCard = ({goToLink="/"}: iOutstanding) => {
    return (
        <Box display="block" padding="20px 12.5px" borderRadius="16px" boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)" backgroundColor="#ffffff">
        {/* =========  the header =======*/}
           <div className="flex flex-row items-center justify-between">
          <div className="overview__title flex flex-row items-center gap-2">
              {/* <span>{OverviewIcons[type]}</span> */}
              <h2 className="text-[14px] text-vrBlack font-[500]">Outstanding</h2>
          </div>

          {/* view all link */}
          <Link href={goToLink} className="text-[12px] text-[#cbcbcb] flex flex-row items-center gap-1">
              <span>view all</span>
              <IoIosArrowForward className="" />

          </Link>
      </div>
  </Box>
    )
}