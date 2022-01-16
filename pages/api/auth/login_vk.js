import Cookies from "cookies"
import { getTokenURL, vkApiMethod } from "../../../lib/vk"

export default function handler(req, res) {
    const { query } = req
    const cookies = new Cookies(req, res)
    const TOKEN_URL = getTokenURL(query.code)
    fetch(TOKEN_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    })
    .then(result => result.json())
    .then((result) => {
        vkApiMethod('account.getProfileInfo', {access_token: result.token})
        cookies.set('user', JSON.stringify(result), {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: false // true by default
        })
        return res.redirect('/')
    })
    .catch(err => res.redirect('/'))
}