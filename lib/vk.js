import Cookies from 'cookies'

const apiVersion = "5.131"

export {LOGIN_URL}
export {getTokenURL}
export {vkApiMethod}

const scopes = [
    'offline',
    'wall',
    'friends',
    'status',
    'photos',
    'audio',
    'stories',
    'groups',
    'video',
    'email'
].join(',')
const params = {
    client_id: process.env.VK_ID,
    scope: scopes,
    response_type: 'code',
    v: apiVersion,
    display: 'page',
    redirect_uri: `${process.env.URL}/api/auth/login_vk`

}

const queryParamString = new URLSearchParams(params)
const LOGIN_URL = `https://oauth.vk.com/authorize?${queryParamString.toString()}`

function getTokenURL(code) {
    const token_params = {
        client_id: process.env.VK_ID,
        client_secret: process.env.VK_SECRET,
        redirect_uri: `${process.env.URL}/api/auth/login_vk`,
        scope: scopes,
        v: apiVersion,
        code: code
    }
    const queryParam = new URLSearchParams(token_params)
    const TOKEN_URL = `https://oauth.vk.com/access_token?${queryParam.toString()}`
    return TOKEN_URL
}

async function vkApiMethod(method, params) {
    const queryParams = new URLSearchParams(params)
    const URL = `https://api.vk.com/method/${method}?${queryParams.toString()}&v=${apiVersion}`
    const data = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    })
    return data
}