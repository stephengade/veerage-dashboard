// import BalanceCarousel fro@/components/Carousel/carouselUIsel"
'use client'

import { Box } from "@chakra-ui/react"

import { BalanceCard } from "@/components/Card/balanceCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
  } from "@/components/ui/carousel"
import React from "react"

const BalanceOverview = () => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
  
    React.useEffect(() => {
      if (!api) {
        return
      }
  
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
  
      api.on("select", () => {
        console.log("current")
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])

    
    const ImagePlaceholder = '/assets/images/listingPlaceholder.png'
    

     const data = [
        {amount: "0.00", title: "Total outstanding balance", subtitle: "Outstanding balance", listingImage: ImagePlaceholder, balance: "0.00", value: 0},
        {amount: "2000.00", title: "Total widthdrawal balance", subtitle: "Widthdrawal balance", listingImage: ImagePlaceholder, balance: "4.00", value: 0},
        {amount: "15,000.00", title: "Total received balance", subtitle: "Received balance", listingImage: ImagePlaceholder, balance: "1.00", value: 0},
        {amount: "20.00", title: "Total lent balance", subtitle: "Lent balance", listingImage: ImagePlaceholder, balance: "3.00", value: 0},
        {amount: "0.00", title: "Total raised balance", subtitle: "Raised balance",  listingImage: ImagePlaceholder, balance: "0.00", value: 0}
    ]


    return (
      <Box display="block" padding="20px" position="relative" borderRadius="16px" boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)" backgroundColor="#ffffff">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {data.map(({amount, title, listingImage, balance, value, subtitle}, index) => (
              <CarouselItem key={index}>
                 <BalanceCard subtitle={subtitle} amount={amount} title={title} value={value} listingImage={listingImage} balance={balance} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 absolute right-[20px] bottom-[20px]">
         <p className="text-[14px] text-[#606060]">{current}/{count}</p>
        </div>
      </Box>
    )
}

export default BalanceOverview