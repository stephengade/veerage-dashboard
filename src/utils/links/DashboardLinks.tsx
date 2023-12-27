
import { CalenderIcon, HouseIcon, LocationIcon, SettingIcon, UserIcon, WalletIcon } from "../../../public/assets/icons/DashIcons"

export interface iDashLinks  {
    text: string
    url: string
    icon: React.ReactNode
}

export const DashboardLinks: iDashLinks[] = [
 {
    text: "Dashboard",
    url: "/dashboard",
    icon: <HouseIcon color="#191919" />
 },
 {
    text: "Listing",
    url: "/listing",
    icon: <LocationIcon />
 },

 {
    text: "Users",
    url: "/users",
    icon: <UserIcon />
 },

 {
    text: "Account",
    url: "/account",
    icon: <WalletIcon />
 },

 {
    text: "Request",
    url: "/request",
    icon: <CalenderIcon />
 },

 {
    text: "Settings",
    url: "/settings",
    icon: <SettingIcon />
 },
]

