import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
    const searchIconStyle = {};

    return (
        <form className="max-w-md mx-6 pb-10 relative lg:mx-0 ">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative">
                <input type="search" id="default-search" className="font-opensans block w-full py-2 p-4  text-sm md:text-base  border border-gray-200 rounded-lg bg-gray-50" placeholder="F.eks klær, møbler, servise.." required />
                <button type="submit" className="flex justify-center items-center gap-2 transition py-2 font-opensans text-white absolute top-1/2 transform -translate-y-1/2 right-0 bg-forestgreen-default hover:bg-ivory-darker hover:text-forestgreen-darker duration-200 font-medium rounded-l-none rounded-r-md text-sm md:text-base px-3 ">
                    Søk
                    <FiSearch style={searchIconStyle} />
                </button>
            </div>
        </form>
    );
}