import Image from 'next/image'
import Link from "next/link"

interface iLogo {
  link?: string
  clickable?: boolean
}

export const Logo = ({ link = "/", clickable }: iLogo) => {
  return (
    <>
      {clickable ?
        (<Link href={link}><Image src="/assets/images/Logo.svg" alt="veerge logo" width={100} height={30} /> </Link>)
        :
        (<Image src="/assets/images/Logo.svg" alt="veerge logo" width={100} height={30} />)
      }
    </>
  )
}