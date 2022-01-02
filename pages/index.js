import Head from 'next/head'
import Asidebar from '../components/Asidebar'
import Center from '../components/Center'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Sidebar />
        <Center />
        <Asidebar />
      </main>
    </div>
  )
}
