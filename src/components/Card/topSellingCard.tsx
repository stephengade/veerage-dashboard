
import { Box } from "@chakra-ui/react"
import Image from "next/image"



interface iSelling {
  amount: string
  title: string
  value: number
  topSellingImage: string
  unitSold: string | number
}

export const TopSellingCard = (props: iSelling) => {
  const { amount, title, value, topSellingImage, unitSold } = props
  return (
    <Box display="block" padding="20px" borderRadius="16px" boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)" backgroundColor="#ffffff">
      {/* =========  the header =======*/}
      <h2 className="text-[16px] text-vrLemon font-[600] mb-6">Top selling</h2>

      <h3 className="text-vrBlack text-[28px] font-[600]"> ₦ {amount.split(".")[0]}<span className="text-[#cbcbcb]">.{amount.split(".")[1]}</span></h3>



      {/* //    listing card */}

      <div className="mt-5">
        <p className="text-[14px] text-[#606060] mb-1">{title}</p>

        <div className="flex flex-row gap-4 ">
          <span className={`p-5 md:p-7 bg-[#f5f5f5] rounded-[12px] border-[1px] solid`}>
            <Image className="w-[120px] h-[120px] rounded-[12px]" src={topSellingImage} alt={title} width={100} height={100} />
          </span>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-[20px] text-vrBlack font-[600]">{value === 0 && "None"}</h2>
            <p className="text-[#cbcbcb] text-[16px] font-[600]">{unitSold}</p>
            <p className="text-[#606060] text-[12px] font-[400]">whole unit sold</p>
          </div>
        </div>
      </div>


    </Box>
  )
}