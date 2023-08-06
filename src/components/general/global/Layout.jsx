import * as React from 'react'
import { Chivo } from 'next/font/google'

const chivo = Chivo({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const Layout = ({ children }) => {

  return (
    <div className={`${chivo.className} w-full h-full bg-stamm-white`}>
        <main className={`w-full h-full p-0`}>
            { children }
        </main>
    </div>
  )
}

export default Layout