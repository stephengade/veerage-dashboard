import { SalesFilterButtons } from "@/components/Buttons/salesFilterButton";
import { Box, Button, Divider } from "@chakra-ui/react";
import { OverviewChart } from "./OverviewChart";

export const SalesOverview = () => {
   const startMonth = "Jan 2022"
   const endMonth = "Sep 2022"
   return (
      <Box display="block" padding="20px 0" borderRadius="16px" boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)" backgroundColor="#ffffff">
         {/* ========= overview header ======== */}
         <div className="flex flex-row md:items-center justify-between px-5 md:px-[20px]">
            <div className="header__title">
               <h2 className="text-[20px] text-vrBlack font-[600]">Sales Overview</h2>
               <p className="text-[12px] text-[#606060] mt-2">Showing overview {startMonth} - {endMonth}</p>
            </div>


            <Button backgroundColor="white" color="#cbcbcb" fontSize="12px" fontWeight="300" border="1px solid #cbcbcb" borderRadius="12px" padding="3px 6px">view transaction</Button>

         </div>
         

          {/* ========= Filter button ======== */}

          <div className="my-4 flex justify-end px-5 md:px-[20px]">
            <SalesFilterButtons />
         </div>

         <Divider />

         {/* ========= overview chart ======== */}

           <div className="px-5 md:px-[20px]">
            <OverviewChart />
            </div>
      </Box>
   )
};
