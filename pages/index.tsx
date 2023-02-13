import { signIn, signOut, useSession } from 'next-auth/react'
import Layout from '../components/layout'

export default function Home() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email;
  return (
    <>
      <Layout>
        <p>
          Authentication Status = {status}
          <br />
          Email = {userEmail}
          <br />
          <button onClick={() => signIn()}>Sign in</button>
          <button onClick={() => signOut()}>Sign out</button>
        </p>
      </Layout>
    </>
  )
}
