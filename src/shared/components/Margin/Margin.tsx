import React, { FC, PropsWithChildren } from 'react'

const Margin:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=''>
        {children}
    </div>
  )
}

export default Margin