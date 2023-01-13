import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import { getSession, useSession } from "next-auth/react"
import Sidebar from '../components/Sidebar'






export default function Home({ session }) {
  //const {data: session} = useSession();
  //Takes you to the Login page!!
  console.log(session)
    if (!session) return <Login />;
    

  return (
      <div className='h-screen bg-gray-100 overflow-hidden'>
        <Head>
          <title>Facebook</title>
        </Head>
  
        <Header />
  
        <main>
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </main>
      </div>
    )
  }

  export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    return {
      props: { session },
    }
  }

