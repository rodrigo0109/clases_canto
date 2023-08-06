import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../general/Map'), {
  ssr: false
})

const DyMap = () => {
  return (
    <DynamicMap />
  )
}

export default DyMap