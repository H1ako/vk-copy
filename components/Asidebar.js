function Asidebar() {
    return (
        <div className="py-2 sticky top-12 h-max lg:block hidden">
            <div className="bg-white relative text-[#5181b8] py-2 rounded-md shadow-sm">
                <div className="">
                    <h5 className="relative border-l-2 border-[#5181b8] bg-[#eceff1] text-black px-4 py-1 cursor-pointer hover:bg-[#E5E7EB]">News</h5>
                    <h5 className="text-gray-500 px-8 py-1 cursor-pointer hover:bg-[#e7ecf0]">Photos</h5>
                    <h5 className="text-gray-500 px-8 py-1 cursor-pointer hover:bg-[#e7ecf0]">Videos</h5>
                    <h5 className="text-gray-500 px-8 py-1 cursor-pointer hover:bg-[#e7ecf0]">Podcasts</h5>
                    <h5 className="text-gray-500 px-8 py-1 cursor-pointer hover:bg-[#e7ecf0]">Coronavirus 🦠</h5>
                    <h5 className="px-4 py-1 cursor-pointer hover:bg-[#e7ecf0]">Recommended</h5>
                    <h5 className="px-4 py-1 cursor-pointer hover:bg-[#e7ecf0]">Search</h5>
                    <hr className="m-auto border-t-[1px] w-[90%] border-[#dce1e6] pb-2 mt-2" />
                </div>
                <div className="">
                    <h5 className="px-4 py-1 cursor-pointer hover:bg-[#e7ecf0]">Reactions</h5>
                    <h5 className="px-4 py-1 cursor-pointer hover:bg-[#e7ecf0]">Updates</h5>
                    <h5 className="px-4 py-1 cursor-pointer hover:bg-[#e7ecf0]">Comments</h5>
                </div>
            </div>
            
        </div>
    )
}

export default Asidebar
