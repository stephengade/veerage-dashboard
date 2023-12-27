'use client'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { CalenderNavigation } from './calenderNavigation'
import "./calender.css"

interface iCalender {
  mode?: "single" | "multiple" | "range" | "default"
  selected: Date
  defaultMonth?: Date
  setSelected: any
  footer?: any
  fromYear?: number
  toYear?: number
  toDate?: Date
}

export const CalenderUI = (props: iCalender) => {
  const { mode = "single", selected, setSelected, footer, defaultMonth, fromYear, toYear, toDate } = props;





  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      defaultMonth={defaultMonth}
      fromYear={fromYear}
      toYear={toYear}
      toDate={toDate}
      components={{
        Caption: CalenderNavigation
      }}

    
    />
  )
}