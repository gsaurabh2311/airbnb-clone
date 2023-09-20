import Navbar from '@/components/base/Navbar'
import Categories from '@/components/common/Categories'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Categories />
    </div>
  )
}
