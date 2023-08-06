import dynamic from 'next/dynamic'

const DynamicVideo = dynamic(() => import('../general/Carrousel'), {
  ssr: false
})

const DyVideo = () => {
  return (
    <DynamicVideo />
  )
}

export default DyVideo