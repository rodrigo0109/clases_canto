import HomeComp from '@/components/general/Home'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex w-full min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <HomeComp />
    </div>
  )
}
