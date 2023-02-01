
import { Inter } from '@next/font/google'
import All from "./countries/All"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <All/>
      </div>
    </>
  )
}
