// +++++++++ Calender Header  +++++++++

interface iCalenderHeader {
  title?: string
  onClose: () => void
}

const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g clip-path="url(#clip0_2_708)">
    <path d="M12.0007 11.4363L16.9507 6.48633L18.3647 7.90033L13.4147 12.8503L18.3647 17.8003L16.9507 19.2143L12.0007 14.2643L7.05072 19.2143L5.63672 17.8003L10.5867 12.8503L5.63672 7.90033L7.05072 6.48633L12.0007 11.4363Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_2_708">
      <rect width="24" height="24" fill="white" transform="translate(0 0.849609)" />
    </clipPath>
  </defs>
</svg>


export const CalenderHeader = ({ title="Calender", onClose }: iCalenderHeader) => {
  return (
    <div className="flex flex-row items-center justify-between text-white bg-[#171717] shadow-sm">
      <h3 className="text-[16px] font-[600]">{title}</h3>
      <span className="transition ease-in-out cursor-pointer" onClick={onClose}>
        {closeIcon}
      </span>
    </div>
  )
}