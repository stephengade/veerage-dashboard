interface iSalesBalanaceSummary {
  progress: "up" | "down"
  amount: string 
  title: string
  percent: number | string
}

type TsummaryData = {
  SalesData: iSalesBalanaceSummary[]
}


const SalesBalanceIcon = {
  "up": <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <g clip-path="url(#clip0_2_975)">
      <path d="M6.99935 1.16699C10.2193 1.16699 12.8327 3.78033 12.8327 7.00033C12.8327 10.2203 10.2193 12.8337 6.99935 12.8337C3.77935 12.8337 1.16602 10.2203 1.16602 7.00033C1.16602 3.78033 3.77935 1.16699 6.99935 1.16699ZM7.58268 7.00033H9.33268L6.99935 4.66699L4.66602 7.00033H6.41602V9.33366H7.58268V7.00033Z" fill="#12D8A0" />
    </g>
    <defs>
      <clipPath id="clip0_2_975">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>,

  "down": <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <g clip-path="url(#clip0_2_986)">
      <path d="M6.99935 1.16699C10.2193 1.16699 12.8327 3.78033 12.8327 7.00033C12.8327 10.2203 10.2193 12.8337 6.99935 12.8337C3.77935 12.8337 1.16602 10.2203 1.16602 7.00033C1.16602 3.78033 3.77935 1.16699 6.99935 1.16699ZM7.58268 7.00033H9.33268L6.99935 4.66699L4.66602 7.00033H6.41602V9.33366H7.58268V7.00033Z" fill="#FF6A6A" />
    </g>
    <defs>
      <clipPath id="clip0_2_986">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
}

export const SaleBalanceSummary = ({ SalesData }: TsummaryData) => {
  return (
    <div className="grid grid-cols-2 gap-4 py-5">
      {SalesData.map(({ progress, amount, title, percent }, index) => {
        return (
          <div key={title} className="py-[8px] px-[15px] rounded-[12px] border-[1px] border-solid border-[#e4e4e4]">
            <h3 className={`text-[20px] font-[600] ${index === 0 ? "text-vrBlue" : index === 1 ? "text-vrLemon" : index === 2 ? "text-vrBlack" : "text-[#FF6A6A]"}`}> ₦ {amount.split(".")[0]}<span className={index === 2 ? "opacity-[0.4]" : ""}>.{amount.split(".")[1]}</span> </h3>
            <span className="flex flex-row items-center gap-1 mt-2">
              <p className="text-[10px] font-[500] text-vrBlack">{title}</p>
              <p className={`text-[10px] flex flex-row items-center gap-1 ${progress === "up" ? "text-vrLemon" : "text-[#FF6A6A]"}`}>{SalesBalanceIcon[progress]} {percent}%</p>
            </span>
          </div>
        )
      })}
    </div>
  )
}