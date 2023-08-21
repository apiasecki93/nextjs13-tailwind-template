import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'NEXTJS 13 & TAILWINDCSS',
  description: 'Template',
  charset: 'UTF-8',
  // set viewport to `width=device-width, initial-scale=1`
  viewport: 'width=device-width, initial-scale=1',
  // set the `lang` attribute of the `html` tag to `en`
  lang: 'en',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    
  )
}
