import Head from 'next/head'
import Asidebar from '../components/Asidebar'
import Center from '../components/Center'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useDispatch } from 'react-redux'
import { vkApiMethod } from '../lib/vk'
import { getCookie } from 'cookies-next'
import { set_user } from '../redux/features/user/userSlice'

export default function Home({name, pic}) {
  if (name || pic) {
    const dispatch = useDispatch()
    dispatch(set_user({name, pic}))
  }
  return (
    <div className="min-h-screen w-full flex flex-row md:flex-col">
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main className='grid gap-3 flex-grow md:grid-template-main grid-template-sm md:px-[6%] lg:px-[18%]'>
        <Sidebar />
        <Center />
        <Asidebar />
      </main>
    </div>
  )
}

export async function getServerSideProps({req, res}) {
  const user = JSON.parse(getCookie('user', { req, res} ))
  let profileInfo = await vkApiMethod('users.get', {access_token: user.access_token, user_id: user.user_id, fields: 'photo_200'})
  .then(data => data.json())
  .then(data => {
    return data
  })
  return {
    props: {
      name: profileInfo.response[0].first_name,
      pic: profileInfo.response[0].photo_200
    }
  }
}