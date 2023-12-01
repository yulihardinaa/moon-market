import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductDisplay from '@/components/ProductDisplay/ProductDisplay'
import Image from 'next/image'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center  max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Moon Market for your better{' '}
          <span className='text-purple-600'>Digital Assets</span>
          .
        </h1>
        <p className='text-2xl py-9 font-semibold'>
        Unlock Your Digital Universe: Moon Market – Elevating Possibilities in the World of Digital Assets
        </p>
        <p className='text-xl py-4 text-gray-700'>
          See our products below
        </p>

        <ProductDisplay></ProductDisplay>
      </div>
    </MaxWidthWrapper>
  )
}
