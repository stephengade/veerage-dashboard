import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { Providers } from './../utils/chakra/provider.chakra';
import { VeergeAssistant } from '@/components/VeergeAssistant/AssistantModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://veerage.vercel.app/'),
  title: "Veerage",
  description: "your app description here",
  category: "website",
  generator: "Next.js", // framework used

// the big is here 
  manifest: "/manifest.json", 
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
      <VeergeAssistant className="" />
        <Providers>{children}</Providers>
       
        </body>
    </html>
  )
}
