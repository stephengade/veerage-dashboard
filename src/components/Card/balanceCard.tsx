
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import Image from "next/image"



export interface iBalance {
  amount: string
  title: string
  value: number
  listingImage: string
  balance: string
  subtitle: string
}

export const BalanceCard = (props: iBalance) => {
  const { amount, title, value, listingImage, balance, subtitle } = props
  return (
    <div>
      {/* =========  the header =======*/}

      <div className="flex flex-row items-center justify-between">
        <h3 className="text-vrBlack text-[28px] font-[600]"> ₦ {amount.split(".")[0]}<span className="text-[#cbcbcb]">.{amount.split(".")[1]}</span></h3>

        {/* view all link */}
        <Link href='/dashboard' className="text-[12px] text-[#cbcbcb] flex flex-row items-center gap-1">
          <span>view all</span>
          <IoIosArrowForward className="" />

        </Link>
      </div>

      {/* //    listing card */}

      <div className="">
        <p className="text-[14px] text-[#606060] mb-1">{title}</p>

        <div className="flex flex-row gap-4 mt-4 md:mt-10">
          <span className={`p-5 md:p-7 bg-[#f5f5f5] rounded-[12px] border-[1px] solid`}>
            <Image className="w-[150px] h-[150px] rounded-[12px]" src={listingImage} alt={title} width={100} height={100} />
          </span>
          <div className="flex flex-col gap-y-4 md:gap-y-10">
            <h2 className="text-[20px] text-vrBlack font-[600]">{value === 0 && "None"}</h2>
            <div>
              <p className={`text-[#cbcbcb] text-[14px] ${balance.startsWith("0.") && "text-vrRouge"}`}>₦ {balance}</p>
              <p className="text-[#606060] text-[12px] font-[400]">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}