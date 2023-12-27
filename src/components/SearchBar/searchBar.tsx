'use client'

import { useState } from "react";
import {useRouter} from 'next/navigation'
import { SearchIcon } from "../../../public/assets/icons/DashIcons";

export const SearchBar = () => {

  const router = useRouter()

    const [query, setQuery] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const {value} = e.target;
       setQuery(value)
    }

    // handle search

    const handleSearch = () => {
      if(!query) return alert("Enter keyword to search")
       router.push(`/dashboard/?s=${query}`)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      

        if(event.key === "Enter") {
          handleSearch()
        }
    }


    return (
     <div tabIndex={0} className="flex flex-row items-center px-2 w-[90%] md:w-[350px] h-[42px] rounded-[12px] border-[1px] border-solid border-[#E4E4E4] bg-[#F5F5F5]">
      <input onKeyDown={handleKeyPress} className="bg-[transparent] text-[12px] text-[#919191] outline-none border-none h-full w-full" type="search" value={query} onChange={handleChange} placeholder="Search... properties, customers here" />
     <SearchIcon />
      </div>
    )
}