import {NextResponse} from 'next/server'
import { getCookie } from 'cookies-next'

export async function middleware(req, res) {
    const user = JSON.parse(getCookie('user', { req, res} ))
    const token = user.access_token
    const {pathname} = req.nextUrl
    
    if (token || pathname === '/api/auth/login_vk') {
        return NextResponse.next()
        
    }

    if (!token && pathname !== '/login') {
        return NextResponse.redirect('/login')
    }

}