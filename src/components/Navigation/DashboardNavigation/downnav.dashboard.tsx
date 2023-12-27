'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { SearchBar } from "@/components/SearchBar/searchBar"
import { DashboardLinks, iDashLinks } from "@/utils/links/DashboardLinks"
import { Box } from "@chakra-ui/react"



export const DownNav = () => {
  return (
    <Box role="menu" className="flex flex-row items-center py-3 justify-center md:justify-between gap-10 shadow-md bg-white w-full px-2 md:px-12">

      {/* ++++++++++  Links +++++++++++++ */}
      
        <NavLinks />
      {/* ++++++++++   search bar +++++++++++++ */}
    
        <SearchBar />
    </Box>
  )
}


// handle Nav link here

export const NavLinks = () => {

  const activeLink = usePathname()


  return (
    <div className="hidden w-full md:flex flex-row items-center justify-between ">
      {DashboardLinks.map(({ text, url, icon }: iDashLinks) => {
        return (
          <Link href={url} key={`${text}-${url}`} >
            <span className={`${activeLink && activeLink.includes(url) && "bg-[#f5f5f5]"} transition ease-in-out px-3 py-2 hover:bg-[#f5f5f5] rounded-[8px] flex flex-row items-center gap-1`}>
              <span>{icon}</span>
              <span className="text-[14px] text-[#3D3D3D]">{text}</span>
            </span>
          </Link>
        )
      })}
    </div>
  )
}