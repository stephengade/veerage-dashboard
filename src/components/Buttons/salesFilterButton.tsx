'use client'
import {useState} from 'react'
import {useRouter, usePathname} from "next/navigation"

const buttonHelper = [
    {label: "1 Week", value: "ONE_WEEK"},
    {label: "1 Month", value: "ONE_MONTH"},
    {label: "1 Year", value: "ONE_YEAR"}
]

export const SalesFilterButtons = () => {
   
   const [currentFilter, setCurrentFilter] = useState<string>("")


    const currentPath = usePathname()
    const router = useRouter()


    // ==== using the parameter is faster then useState === //

    const handleSetFilter = (item: string) => {
         router.push(`${currentPath}/?salesFilter=${item}`)
         setCurrentFilter(item)
    }


  return (
    <div className="flex flex-row items-center gap-5">
      {buttonHelper.map(({label, value}) => {
        return <p key={value} onClick={()=> handleSetFilter(value)} className={`text-[14px] cursor-pointer hover:bg-[#e5e5e5] transition ease-in-out text-vrBlack rounded-[8px] px-3 py-2 ${currentFilter === value ? "font-[600] bg-[#F5F5F5]" : "font-[400]"}`}>{label}</p>
      })}
    </div>
  )
}