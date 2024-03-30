import { SearchBar } from "./SearchBar";

export const LandingHeader = () => {
    return (
        <header className="bg-ivory-default h-fit mb-10 pb-2 overflow-hidden">
            <div className="lg:flex lg:items-center lg:justify-between lg:px-40">
                <div className="lg:w-1/2 lg:pr-10">
                    <h1 className="font-opensans text-forestgreen-default text-3xl pt-36 p-2 px-6 md:text-xl md:px-20 lg:px-0 lg:pt-20 lg:text-5xl">Velkommen til <span className="font-jomhuria text-7xl">Bruktglede</span></h1>
                    <img src="/LandingImage.svg" alt="Logo" className="lg:h-full mx-auto" />
                </div>
                <div className="lg:w-1/2">
                    <p className="font-opensans py-6 px-6 text-base overflow-hidden md:text-lg md:px-20 lg:px-0">Har du lyst til å se utvalget Gjøvik har å by på når det kommer til gjenbruk? Begynn å utforsk mulighetene!</p>
                    <h2 className="px-6 font-opensans text-base font-semibold md:px-20 lg:px-0">Start eventyret med et enkelt søk</h2>
                    <SearchBar />
                </div>
            </div>
        </header>
    );
};