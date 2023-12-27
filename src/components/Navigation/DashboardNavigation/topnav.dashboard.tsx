"use client";

import {useState} from 'react'
import { Logo } from "@/components/Logo/logo";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { FaUserAlt } from 'react-icons/fa'

import {
  Avatar,
  Box,
  Button,
  MenuDivider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import {
  PlusIcon,
  CalenderWhiteIcon,
  BellIcon,
} from "../../../../public/assets/icons/DashIcons";
import { DrawerUI } from "@/components/Drawers/DrawerUI";
import { CalenderUI } from '@/components/Calender/calender';
import { CalenderHeader } from '@/components/Calender/calenderHeader';

export const TopNav = () => {
  const username = "Ahmed Alli";
  const userPic = "https://broken-link";


  // drawer toggler

  const { isOpen: isCalenderOpen, onOpen: openCalender, onClose: closeCalender } = useDisclosure()

   const [selectedDate, setSelectedDate] = useState<Date>()



  return (
    <Box
      role="menu"
      className="shadow-md text-white bg-vrBlack  w-full py-3 px-2 md:px-12 flex flex-row items-center justify-between"
    >
      <Logo />

      <div className="flex flex-row space-x-6 md:space-x-12">
        <div className="flex flex-row items-center gap-5">
          <span className="hidden md:inline-block cursor-pointer">
            <PlusIcon />{" "}
          </span>
          <span onClick={openCalender} className="cursor-pointer">
            <CalenderWhiteIcon />{" "}
          </span>
          <span className="cursor-pointer">
            <BellIcon />{" "}
          </span>
        </div>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton>
                <span className="flex flex-row items-center gap-3">
                  <Avatar bg="white" icon={<FaUserAlt fontSize='2rem' className="text-vrBlack" />} className="h-[30px] w-[30px] md:h-[48px] md:w-[48px] bg-vrBlack" />
                  <p className="text-[15px] hidden md:inline-block">{username}</p>
                  {!isOpen ? <MdArrowDropUp fontSize={20} /> : <MdArrowDropDown fontSize={20} />}
                </span>
              </MenuButton>

              <MenuList color="black" bg="white" fontSize="12px" >
                <MenuItem icon={<AiOutlineMessage fontSize="12px" />}>
                  Support
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<LuUsers2 fontSize="12px" />} >
                  Switch account
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<TbLogout2 fontSize="12px" />}>
                  Logout
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </div>

      {isCalenderOpen && <DrawerUI size="xs" isOpen={isCalenderOpen} onClose={closeCalender}  header={<CalenderHeader onClose={closeCalender} />}>
        <CalenderUI selected={selectedDate && selectedDate} setSelected={setSelectedDate} />
      </DrawerUI>

      }
    </Box>
  );
};
