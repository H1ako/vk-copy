import { useState } from "react"
import CenterPost from "./CenterPost"
import { useSelector } from "react-redux"
import { vkApiMethod } from "../lib/vk"

function Center({user_pic, user_name}) {
    const [posts, setPosts] = useState([])
    const access_token = useSelector(state => state.user.access_token)

    const loadNewPosts = () => {
        vkApiMethod('newsfeed.get', {access_token, max_photos: 100})
            .then(data => data.json())
            .then(data => console.log(data))
    }

    // FIXME: need access token with default redirect_url
    // loadNewPosts() 

    return (
        <div className="py-2 px-3 md:px-0 flex flex-col gap-5 relative">
            <div className="bg-white shadow-sm px-4 py-1 gap-1 h-12 rounded-md grid grid-newPost text-[#dce1e6]">

                <div className="flex items-center gap-2">
                    <img className="rounded-full flex-none w-7 h-7" src={user_pic} alt={user_name} />
                    <input className="w-full bg-transparent outline-none flex-grow text-black" type="text" placeholder="What's new?"/>
                </div>
                <div className="flex items-center gap-3 justify-end">
                    <svg className="cursor-pointer  hover:text-gray-500" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M5.5 5.5c.57 0 1-.2 1.34-.52.24-.24.43-.54.55-.74l.06-.1c.15-.23.26-.37.39-.47.11-.08.3-.17.66-.17h3c.36 0 .55.09.66.17.13.1.24.24.4.48l.05.09c.12.2.3.5.55.74.33.32.77.52 1.34.52.73 0 .99 0 1.19.04.9.18 1.59.88 1.77 1.77.04.2.04.46.04 1.19v3.45c0 .85 0 1.45-.04 1.9-.04.46-.1.72-.2.92-.22.42-.57.77-.99.98-.2.1-.46.17-.91.21-.46.04-1.06.04-1.91.04h-6.9c-.85 0-1.45 0-1.91-.04a2.4 2.4 0 01-.91-.2 2.25 2.25 0 01-.99-.99 2.4 2.4 0 01-.2-.91c-.04-.46-.04-1.06-.04-1.91V8.5c0-.73 0-.99.04-1.19.18-.9.88-1.59 1.77-1.77.2-.04.46-.04 1.19-.04zm3-3.5c-.64 0-1.14.16-1.54.46-.39.27-.62.63-.78.9l-.08.11c-.13.22-.2.34-.3.43-.06.05-.12.1-.3.1h-.09c-.61 0-1.03 0-1.4.07a3.75 3.75 0 00-2.94 2.95C1 7.38 1 7.8 1 8.42v3.56c0 .81 0 1.47.04 2 .05.55.14 1.03.37 1.47.36.7.93 1.28 1.64 1.64.44.23.92.32 1.47.37.53.04 1.18.04 2 .04H13.48c.81 0 1.47 0 2-.04a3.84 3.84 0 001.47-.37c.7-.36 1.28-.93 1.64-1.64.23-.44.32-.92.37-1.47.04-.53.04-1.19.04-2V8.41c0-.61 0-1.03-.07-1.4a3.75 3.75 0 00-2.95-2.94 7.5 7.5 0 00-1.4-.07h-.08c-.18 0-.24-.05-.3-.1-.1-.1-.17-.2-.3-.43l-.08-.12c-.16-.26-.4-.62-.78-.9-.4-.29-.9-.45-1.54-.45zm3.75 8.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm1.5 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" fill="currentColor" fillRule="evenodd"></path></svg>
                    <svg className="cursor-pointer  hover:text-gray-500" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M10 17a7 7 0 110-14 7 7 0 010 14zm-8.5-7a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zm8.65 3.38l2.7-1.56a2.1 2.1 0 000-3.64l-2.7-1.56A2.1 2.1 0 007 8.44v3.12a2.1 2.1 0 003.15 1.82zm1.95-3.9c.4.23.4.8 0 1.04l-2.7 1.56a.6.6 0 01-.9-.52V8.44c0-.46.5-.75.9-.52z" fill="currentColor" fillRule="evenodd"></path></svg>
                    <svg className="cursor-pointer  hover:text-gray-500" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="music_outline_20__Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="music_outline_20__Icons-20/music_outline_20"><g id="music_outline_20__music_outline_20"><path d="M0 0h20v20H0z"></path><path d="M14.73 2.05a2.28 2.28 0 012.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54zM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37zm-.02-7.78a.78.78 0 00-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 00-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67v-.95-.08z" id="music_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"></path></g></g></g></svg>
                    <svg className="cursor-pointer  hover:text-gray-500" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 14.5c.42 0 .75.34.75.75v.1a.75.75 0 01-.75.65H4.75a.75.75 0 110-1.5h12.5zm0-5a.75.75 0 110 1.5h-8.5a.75.75 0 01-.75-.75v-.1a.75.75 0 01.75-.65h8.5zm-9-6.5c.4 0 .75.34.75.75v.1a.75.75 0 01-.75.65h-2.5v5.75a.75.75 0 01-1.5 0V4.5h-2.5a.76.76 0 01-.74-.65L1 3.75c0-.42.34-.75.75-.75h6.5zm9 1.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75v-.1a.75.75 0 01.75-.65h5.5z" fill="currentColor"></path></svg>
                    <hr className="border-l-[1px] h-[60%] border-[#dce1e6]" />
                    <svg className="cursor-pointer  hover:text-gray-500" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M4.25 8.75a5.75 5.75 0 018.4-5.1.75.75 0 10.7-1.33 7.25 7.25 0 00-10.6 6.43c0 2.06.94 3.48 1.92 4.54.34.38.71.73 1.04 1.04l.33.31c.37.37.61.64.75.87l.1.48c.06.33.11.6.18.84.07.24.16.48.31.7.24.35.57.62.95.78.25.11.5.15.76.17.24.02.52.02.85.02h.12c.33 0 .61 0 .85-.02.26-.02.51-.06.76-.17.38-.16.7-.43.95-.77.15-.23.24-.47.31-.71.07-.23.12-.51.19-.84l.1-.48c.09-.17.25-.36.48-.6.18-.19.38-.37.6-.58l.34-.33a9.08 9.08 0 002.05-2.69.75.75 0 10-1.36-.62 7.63 7.63 0 01-1.73 2.23l-.3.3c-.24.21-.48.44-.68.65-.19.2-.38.4-.54.63h-1.33v-1.64l.97-.77a.75.75 0 00-.94-1.18l-.78.63-.78-.63a.75.75 0 00-.94 1.18l.97.77v1.64H7.92a7.15 7.15 0 00-.84-.93l-.37-.36c-.32-.3-.63-.6-.94-.93-.84-.92-1.52-2-1.52-3.53zm4.26 7.67a6.68 6.68 0 01-.1-.42h3.17c-.03.18-.06.31-.1.42a.83.83 0 01-.1.26.75.75 0 01-.3.26.82.82 0 01-.28.05l-.77.01h-.06l-.77-.01a.82.82 0 01-.27-.05.75.75 0 01-.32-.26.82.82 0 01-.1-.26zm6.63-13.16a.38.38 0 01.72 0l.4 1.18c.12.38.42.68.8.8l1.18.4c.35.11.35.6 0 .72l-1.18.4c-.38.12-.68.42-.8.8l-.4 1.18a.38.38 0 01-.72 0l-.4-1.18a1.28 1.28 0 00-.8-.8l-1.18-.4a.38.38 0 010-.72l1.18-.4c.38-.12.68-.42.8-.8z" fill="currentColor" fillRule="evenodd"></path></svg>
                    <svg className="cursor-pointer  hover:text-gray-500" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.75a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 7.03V5a4 4 0 118 0v2.03c.59.03 1 .11 1.36.3a3 3 0 011.31 1.3c.33.65.33 1.49.33 3.17v1.4c0 1.68 0 2.52-.33 3.16a3 3 0 01-1.3 1.31c-.65.33-1.49.33-3.17.33H7.8c-1.68 0-2.52 0-3.16-.33a3 3 0 01-1.31-1.3C3 15.71 3 14.87 3 13.2v-1.4c0-1.68 0-2.52.33-3.16a3 3 0 011.3-1.31c.36-.19.78-.27 1.37-.3zm4-4.53A2.5 2.5 0 0112.5 5v2h-5V5A2.5 2.5 0 0110 2.5zm-2.2 6c-.86 0-1.42 0-1.85.04-.4.03-.56.09-.63.12a1.5 1.5 0 00-.66.66c-.03.07-.1.22-.12.63-.04.43-.04.99-.04 1.85v1.4c0 .87 0 1.42.04 1.85.03.4.09.56.12.63a1.5 1.5 0 00.66.66c.07.03.22.1.63.12.43.04.98.04 1.85.04h4.4c.86 0 1.42 0 1.85-.04.4-.03.56-.09.63-.12a1.5 1.5 0 00.66-.66c.03-.07.1-.22.12-.63.04-.43.04-.98.04-1.85v-1.4c0-.86 0-1.42-.04-1.85a1.7 1.7 0 00-.12-.63 1.5 1.5 0 00-.66-.66c-.07-.03-.22-.1-.63-.12-.43-.04-.98-.04-1.85-.04H7.8z" fill="currentColor"></path></svg>
                </div>
            </div>

            <div className="bg-white relative overflow-hidden flex flex-col shadow-sm gap-5 px-5 py-3 h-60 rounded-md">
                <h5 className="">Stories</h5>
                <div className="overflow-hidden relative flex-grow">
                    <div className="absolute h-full top-0 left-0 flex items-center z-20">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48"><g fill="none" fillRule="evenodd"><path d="m48 0h-48v48h48z"/><g fillRule="nonzero"><path d="m30.141 14.797a3.5 3.5 0 1 0 -5.282-4.594l-10 11.5a3.5 3.5 0 0 0 0 4.594l10 11.5a3.5 3.5 0 1 0 5.282-4.594l-8.003-9.203z" fill="#000" opacity=".08"/><path d="m29.387 14.14a2.5 2.5 0 0 0 -3.774-3.28l-10 11.5a2.5 2.5 0 0 0 0 3.28l10 11.5a2.5 2.5 0 0 0 3.774-3.28l-8.574-9.86z" fill="#000" fillOpacity=".12"/><path d="m28.632 13.484a1.5 1.5 0 0 0 -2.264-1.968l-10 11.5a1.5 1.5 0 0 0 0 1.968l10 11.5a1.5 1.5 0 0 0 2.264-1.968l-9.144-10.516z" fill="#fff"/></g></g></svg>
                    </div>
                    <div className="absolute top-0 h-full right-0 flex items-center z-20">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48"><g fill="none" fillRule="evenodd"><path d="m0 0h48v48h-48z"/><g fillRule="nonzero"><path d="m17.859 14.797a3.5 3.5 0 1 1 5.282-4.594l10 11.5a3.5 3.5 0 0 1 0 4.594l-10 11.5a3.5 3.5 0 1 1 -5.282-4.594l8.003-9.203z" fill="#000" opacity=".08"/><path d="m18.613 14.14a2.5 2.5 0 0 1 3.774-3.28l10 11.5a2.5 2.5 0 0 1 0 3.28l-10 11.5a2.5 2.5 0 0 1 -3.774-3.28l8.574-9.86z" fill="#000" fillOpacity=".12"/><path d="m19.368 13.484a1.5 1.5 0 0 1 2.264-1.968l10 11.5a1.5 1.5 0 0 1 0 1.968l-10 11.5a1.5 1.5 0 0 1 -2.264-1.968l9.144-10.516z" fill="#fff"/></g></g></svg>
                    </div>
                    <div className="flex gap-3 h-full">
                        <div className="stories-card flex-none cursor-pointer relative bg-center bg-cover bg-no-repeat flex flex-col gap-1 w-24 rounded-xl items-center justify-end h-full p-2" style={{backgroundImage: `url(${user_pic})`}}>
                            <div className="relative z-10 bg-white rounded-full w-10 h-10" />
                            <h5 className="z-10 text-white">Story</h5>
                        </div>
                        <div className=" flex-none stories-card cursor-pointer relative bg-center bg-cover bg-no-repeat flex flex-col gap-1 w-24 rounded-xl items-center justify-end h-full p-2" style={{backgroundImage: `url(${user_pic})`}}>
                            <img className="z-10 p-0.5 rounded-full w-10 h-10" src={user_pic} alt="" />
                            <h5 className="z-10 text-[#99d3ff]">WebM</h5>
                        </div>
                        <div className=" flex-none stories-card cursor-pointer relative bg-center bg-cover bg-no-repeat flex flex-col gap-1 w-24 rounded-xl items-center justify-end h-full p-2" style={{backgroundImage: `url(${user_pic})`}}>
                            <img className="z-10 p-0.5 rounded-full w-10 h-10" src={user_pic} alt="" />
                            <h5 className="z-10 text-[#99d3ff]">WebM</h5>
                        </div>
                        <div className=" flex-none stories-card cursor-pointer relative bg-center bg-cover bg-no-repeat flex flex-col gap-1 w-24 rounded-xl items-center justify-end h-full p-2" style={{backgroundImage: `url(${user_pic})`}}>
                            <img className="z-10 p-0.5 rounded-full w-10 h-10" src={user_pic} alt="" />
                            <h5 className="z-10 text-[#99d3ff]">WebM</h5>
                        </div>
                        <div className=" flex-none stories-card cursor-pointer relative bg-center bg-cover bg-no-repeat flex flex-col gap-1 w-24 rounded-xl items-center justify-end h-full p-2" style={{backgroundImage: `url(${user_pic})`}}>
                            <img className="z-10 p-0.5 rounded-full w-10 h-10" src={user_pic} alt="" />
                            <h5 className="z-10 text-[#99d3ff]">WebM</h5>
                        </div>
                        <div className=" flex-none stories-card cursor-pointer relative bg-center bg-cover bg-no-repeat flex flex-col gap-1 w-24 rounded-xl items-center justify-end h-full p-2" style={{backgroundImage: `url(${user_pic})`}}>
                            <img className="z-10 p-0.5 rounded-full w-10 h-10" src={user_pic} alt="" />
                            <h5 className="z-10 text-[#99d3ff]">WebM</h5>
                        </div>
                        <div className=" flex-none stories-card cursor-pointer relative bg-center bg-cover bg-no-repeat flex flex-col gap-1 w-24 rounded-xl items-center justify-end h-full p-2" style={{backgroundImage: `url(${user_pic})`}}>
                            <img className="z-10 p-0.5 rounded-full w-10 h-10" src={user_pic} alt="" />
                            <h5 className="z-10 text-[#99d3ff]">WebM</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                {
                    posts.map(post_data => (
                        <CenterPost data={post_data}/>
                    ))
                }
                <CenterPost data={''}/>
                <CenterPost data={''}/>
                <CenterPost data={''}/>
            </div>
        </div>
    )
}

export default Center
