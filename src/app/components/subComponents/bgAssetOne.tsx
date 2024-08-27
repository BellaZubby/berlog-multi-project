import React from 'react'

type Props = {
    className:string
}

const BgAssetOne = ({className}: Props) => {
  return (
    <>
        <div className={className}/>
    </>
  )
}

export default BgAssetOne