export const SearchBar = () => {
    return (
        <form className="max-w-md mx-6 pt-5 pb-10 relative md:mx-20 lg:mx-0 ">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium  sr-only">Search</label>
            <div className="relative">
                <input type="search" id="default-search" className="font-opensans block w-full h-3 p-4  text-sm  border border-gray-300 rounded-lg bg-gray-50" placeholder="F.eks klær, møbler, servise.." required />
                <button type="submit" className="h-8 font-opensans text-white absolute top-1/2 transform -translate-y-1/2 right-0 bg-forestgreen-default  font-medium rounded-l-none rounded-r-md text-sm px-4 ">Søk SVG</button>
            </div>
        </form>
    );
};