import { ReactNode } from 'react'
// destructuring the children
const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>{children}
    </div>
  )
}

export default RootLayout