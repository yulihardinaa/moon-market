import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductDisplay from '@/components/ProductList/ProductList'
import Image from 'next/image'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center  max-w-7xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Moon Market for your better{' '}
          <span className='text-purple-600'>Lifestyle and Fashion</span>
          .
        </h1>
        <p className='text-2xl py-9 font-semibold'>
        {/* Unlock Your Digital Universe: Moon Market – Elevating Possibilities in the World of Digital Assets */}
        Step into Style, Step into Life: Moon Market – Your Trendsetting Hub for Fashion and Lifestyle Wonders!
        </p>
        <p className='text-xl py-4 text-gray-700'>
          See our products below
        </p>

        <ProductDisplay></ProductDisplay>
      </div>
    </MaxWidthWrapper>
  )
}
