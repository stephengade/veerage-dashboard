import React, { useRef } from "react"
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader, Divider } from "@chakra-ui/react"


interface IDrawer {
  placement?: "right" | "left" | "top" | "bottom"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  header: React.ReactNode
  showCloseButton?: boolean
}

export const DrawerUI = ({ placement = "right", size = "full", isOpen, onClose, header, showCloseButton = false, children }: IDrawer) => {


  return (
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      size={size}
      variant="secondary"
    >
      <DrawerOverlay />
      <DrawerContent>
        {showCloseButton && <DrawerCloseButton />}
        <DrawerHeader className="bg-[#171717]"> {header} </DrawerHeader>

        <DrawerBody> {children} </DrawerBody>
      </DrawerContent>

    </Drawer>
  )
}