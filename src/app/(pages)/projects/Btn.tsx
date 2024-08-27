import React from 'react'

interface iButton {
    CTA: string
    onClick: () => void
    disabled: boolean
}

const PaginationButton = ({CTA, onClick, disabled}: iButton) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`bg-primary-100 rounded-lg shadow-md hover:bg-primary-300 hover:text-primary-100 text-white font-bold py-2 px-5 ${disabled && "pointer-events-none bg-slate-300"}`}>
        {CTA}
    </button>
  )
}

export default PaginationButton 