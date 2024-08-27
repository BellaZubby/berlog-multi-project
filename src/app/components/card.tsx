"use client"
import React, { ReactNode } from 'react'


type Props = {
  children: ReactNode,
  className?: string;
}

export const Card = ({children, className}:Props) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

