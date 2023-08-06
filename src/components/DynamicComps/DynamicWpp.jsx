import dynamic from 'next/dynamic'

const DynamicWpp = dynamic(() => import('../general/WppButton'), {
  ssr: false
})

const DyWpp = () => {
  return (
    <DynamicWpp />
  )
}

export default DyWpp