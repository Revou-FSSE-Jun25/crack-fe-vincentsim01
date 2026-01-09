

'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '@/app/context/authContext';

interface AuthCheckProps {
  children: React.ReactNode
  requiredRole?: 'USER' | 'ADMIN'
}

export default function AuthCheck({
  children,
  requiredRole = 'USER'
}: AuthCheckProps) {
  const router = useRouter()
  const { isAuthenticated, userRole, isLoading } = useAuth()

  useEffect(() => {
    if (isLoading) {
      console.log('⏳ AuthCheck waiting for auth to load...');
      return;
    }

    console.log('🔐 AuthCheck - isAuthenticated:', isAuthenticated);
    console.log('🔐 AuthCheck - userRole:', userRole);

    if (!isAuthenticated) {
      console.log('❌ Not authenticated, redirecting to login');
      router.push('/Login')
      return
    }

    if (requiredRole === 'ADMIN' && userRole !== 'ADMIN') {
      console.log('❌ Insufficient permissions, redirecting to login');
      router.push('/Login')
      return
    }

    console.log('✅ AuthCheck passed!');
  }, [isLoading, isAuthenticated, userRole, requiredRole, router]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    )
  }

  if (!isAuthenticated || (requiredRole === 'ADMIN' && userRole !== 'ADMIN')) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '18px'
      }}>
        Redirecting...
      </div>
    )
  }

  return <>{children}</>
}
