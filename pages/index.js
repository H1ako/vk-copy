import Head from 'next/head'
import Asidebar from '../components/Asidebar'
import Center from '../components/Center'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useDispatch } from 'react-redux'
import { vkApiMethod } from '../lib/vk'
import { getCookie } from 'cookies-next'
import { set_user } from '../redux/features/user/userSlice'
import { useState } from 'react'

export default function Home({name, pic, access_token}) {
  if (name || pic) {
    const dispatch = useDispatch()
    dispatch(set_user({name, pic, access_token}))
  }

  const [sidebarVisibility, setSidebarVisibility] = useState(false)

  return (
    <div className="min-h-screen w-full flex relative md:flex-col">
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header sidebarVisibility={sidebarVisibility} setSidebarVisibility={setSidebarVisibility}/>

      <main className={`grid ${sidebarVisibility ? 'grid-template-sm' : 'grid-template-sidebar-0'} mx-auto transition-all md:gap-3 flex-grow md:flex-none md:grid-template-md lg:grid-template-main md:w-[72%] xl:w-[67%] lg:w-[80%]`}>
        <Sidebar sidebarVisibility={sidebarVisibility}/>
        <Center user_name={name} user_pic={pic}/>
        <Asidebar />
      </main>
    </div>
  )
}

export async function getServerSideProps({req, res}) {
  const user = JSON.parse(getCookie('user', { req, res} ?? '{}' ))
  let profileInfo = await vkApiMethod('users.get', {access_token: user.access_token, user_id: user.user_id, fields: 'photo_200'})
  .then(data => data.json())
  .then(data => {
    return data
  })
  return {
    props: {
      name: profileInfo.response?.[0]?.first_name ?? '',
      pic: profileInfo.response?.[0]?.photo_200 ?? '',
      access_token: user.access_token ?? ''
    }
  }
}