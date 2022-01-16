import Head from 'next/head'
import { LOGIN_URL } from '../lib/vk'

export default function Login() {
    return (
        <div>
            <Head>
                <title>Log in</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col h-screen w-screen justify-center items-center">
                <img className="object-contain w-64 h-64" src="https://yantar-kolomna.ru/wp-content/uploads/2021/09/vk-scaled-1.png" alt="" />
                <a href={LOGIN_URL} className='text-center mt-5 min-w-[10rem] bg-blue-500 text-white rounded-full p-3'>Log In with VK</a>
            </div>
        </div>
    )
}