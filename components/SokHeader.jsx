import { SearchBar } from "./SearchBar";

export const SokHeader = ({ onSearch }) => {
    return (
        <header className="bg-ivory-default h-40 overflow-hidden lg:h-60 px-6 md:px-28 lg:px-64">
            <h1 className="font-jomhuria text-forestgreen-default text-5xl pt-5 p-2 md:text-6xl lg:pt-20 lg:text-7xl">Søk</h1>
            <div className="w-[100%] lg:w-[60%]">
                <SearchBar onSearch={onSearch} />
            </div>
        </header>
    );
};