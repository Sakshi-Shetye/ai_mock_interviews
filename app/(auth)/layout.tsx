import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import {ReactNode} from 'react'

const Authlayout = async({children}:{children: ReactNode }) => {

   const isUserAuthenticated = await isAuthenticated();

   console.log(" [AuthLayout] isAuthenticated:", isUserAuthenticated);

   if(isUserAuthenticated) redirect('/');

  return (
    <div className="auth-layout">{children}</div>
  )
}

export default Authlayout