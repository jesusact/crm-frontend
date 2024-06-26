export function SearchInput (){
    return (
        <div className="max-w-2xl mx-auto pt-5">
            <form>   
                <label form ="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-100 rounded-lg  light:text-black" placeholder="Search..." required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-customPurple hover:bg-blue-700">Search</button>
                </div>
            </form>
        </div>
    )
}