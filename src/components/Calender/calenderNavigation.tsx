'use client'

import { useNavigation, CaptionProps } from "react-day-picker"
import { format } from 'date-fns'



const leftIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13.98 5.31999L10.77 8.52999L8.79999 10.49C7.96999 11.32 7.96999 12.67 8.79999 13.5L13.98 18.68C14.66 19.36 15.82 18.87 15.82 17.92V12.31V6.07999C15.82 5.11999 14.66 4.63999 13.98 5.31999Z" fill="#98A2B3" />
</svg>


const rightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15.2001 10.49L13.2301 8.51999L10.0201 5.30999C9.34005 4.63999 8.18005 5.11999 8.18005 6.07999V12.31V17.92C8.18005 18.88 9.34005 19.36 10.0201 18.68L15.2001 13.5C16.0301 12.68 16.0301 11.32 15.2001 10.49Z" fill="#98A2B3" />
</svg>


export const CalenderNavigation = (props: CaptionProps) => {
    const { goToMonth, nextMonth, previousMonth } = useNavigation()

    const { displayMonth } = props;

    const currentMonth = format(displayMonth, 'MMMM yyy')

    // handle Next Month

    const handleMonthToggle = (month: Date) => {
        switch (month) {
            case previousMonth:
                goToMonth(month)
                break;
            case nextMonth:
                goToMonth(month)
                break;
            default:
                return;
        }
    }


    return (
        <div className="flex flex-row items-center justify-center gap-5 mb-5">
            <span className="cursor-pointer" onClick={() => previousMonth && handleMonthToggle(previousMonth)} >
                {leftIcon}
            </span>
            <span className="font-[600] text-[16px] text-white">{currentMonth}</span>
            <span className="cursor-pointer" onClick={() => nextMonth && handleMonthToggle(nextMonth)}>
                {rightIcon}
            </span>
        </div>
    )
}


